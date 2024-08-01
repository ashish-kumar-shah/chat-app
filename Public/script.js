const socket = io();

const form = document.getElementById('form');
const recipientSelect = document.getElementById('recipient');
const input = document.getElementById('inp');
const messages = document.getElementById('messages');
const name = document.getElementById("name")
// Prompt the user for their username and register it with the server
const username = prompt("Enter your username:");
socket.emit("register", username);
name.innerHTML = username
// Listen for the list of users from the server
socket.on('user list', (users) => {
    recipientSelect.innerHTML = '<option value="" disabled selected>Select User</option>';
    users.forEach(user => {
        if (user !== username) { // Exclude the current user from the list
            const option = document.createElement('option');
            option.value = user;
            option.textContent = user;
            recipientSelect.appendChild(option);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (recipientSelect.value && input.value) {
        const to = recipientSelect.value;
        const message = input.value;

        // Emit private message event
        socket.emit('private message', {
            to,
            message,
            from: username
        });

        // Create and append the sent message directly
        const sentMessage = document.createElement('div');
        sentMessage.classList.add( 'border-black', 'w-fit', 'p-1', 'm-1', 'rounded', 'float-right', 'clear-both');
        sentMessage.innerHTML = `<div class="flex gap-1">
                                    <p class="bg-blue-900 rounded-full border-black w-6 h-6 flex items-center justify-center pb-[3px] text-white capitalize">
                                        ${username[0]}
                                    </p>
                                    <p class="bg-gray-100 shadow rounded pl-1 pr-1"> ${message}</p>
                                  </div>`;
        messages.appendChild(sentMessage);

        // Clear input
        input.value = '';

        // Auto-scroll to the bottom
        messages.scrollTop = messages.scrollHeight;
    }
});

socket.on('private message', ({ from, message }) => {
    // Create and append the received message directly
    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add( 'border-black', 'w-fit', 'p-1', 'm-1', 'rounded', 'float-left', 'clear-both');
    receivedMessage.innerHTML = `<div class="flex gap-1">
                                    <p class="bg-blue-900 rounded-full border-black w-6 h-6 flex items-center justify-center pb-[3px] text-white capitalize">
                                        ${from[0]}
                                    </p>
                                    <p class="bg-gray-100 shadow rounded pl-1 pr-1">${message}</p>
                                  </div>`;
    messages.appendChild(receivedMessage);

    // Auto-scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
});
