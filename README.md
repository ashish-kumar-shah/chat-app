
# Chat Application

This chat application allows users to communicate with each other through private messages. Users can select a recipient from a dropdown list and send messages directly to them. The application uses Socket.io for real-time communication between clients.

## Features

- **User Registration:** Users are prompted to enter their username upon joining the chat. Their username is then registered with the server.
- **Private Messaging:** Users can select a recipient from a dropdown list of active users and send private messages to them.
- **Real-Time Communication:** Messages are sent and received in real-time using Socket.io.
- **User Interface:** The chat interface is styled using Tailwind CSS for a clean and modern look.

## Project Structure

- **Public/**: Contains the frontend files.
  - **Index.html**: The main HTML file that structures the chat interface.
  - **script.js**: Handles the client-side JavaScript, including Socket.io interactions and DOM manipulation.
- **index.js**: The backend server file that handles user connections, message routing, and user management.
- **package.json**: Contains metadata about the project and its dependencies.
- **package-lock.json**: Tracks the exact versions of dependencies installed in the project.

## How to Run the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repository/chat-application.git
   cd chat-application

Install Dependencies:
Make sure you have Node.js installed. Then, run
npm install

Install Dependencies:
Make sure you have Node.js installed. Then, run:

npm install

Start the Server:
nodemon index.js

The server will start running on http://localhost:80.

Open the Application:
Open your web browser and navigate to http://localhost:80 to use the chat application.

Usage:

- Username Prompt: When you open the application, you will be prompted to enter a username. This username will be visible to other users.
- Select Recipient: Choose a recipient from the dropdown menu to send a private message.
- Send Message: Type your message in the input field and click "Send" to deliver the message.

Dependencies:

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Socket.io: Enables real-time, bidirectional communication between web clients and servers.

Future Enhancements:

- User Authentication: Implementing user authentication for better user management.
- Message History: Adding the ability to store and retrieve past conversations.
- Group Chat: Extending the application to support group chats.
