# SquadSpeak Chat Application
SquadSpeak is a real-time chat application built using Node.js and Socket.io. This application allows users to join a chat room, send messages, and receive updates instantly. Below is an overview of the key components and structure of the project.

## Technologies Used
- **Node.js**: The server-side runtime for running the chat server.
- **Socket.io**: A JavaScript library that enables real-time, bidirectional, and event-based communication between the browser and the server.
- **HTML, CSS**: The front-end structure and styling of the chat application.

[comment]: <> (## Project Structure)

[comment]: <> (### `client.js`
This file handles the client-side functionality of the chat application. It establishes a connection to the server using Socket.io, listens for events like 'new-user-joined,' 'send,' 'recieve,' and 'left,' and updates the UI accordingly. It also includes audio feedback for incoming messages.
)

[comment]: <> (### `client copy.js`
The Node.js server file initializes the Socket.io server, establishes a connection with the client, and handles events such as 'new-user-joined,' 'send,' and 'disconnect.' It also addresses CORS issues by using Express and CORS middleware.
)

[comment]: <> (### `index.js`
This file is the entry point for the Node.js server. It sets up the Express app, enables CORS, and starts the server on port 8000. The Socket.io server listens for connections, and various events are handled for user interactions.
)

[comment]: <> (### `index.html`
The HTML file provides the structure for the chat application. It includes a form for sending messages and a container for displaying messages. It also loads the Socket.io script and the client-side JavaScript file.
)

## Usage
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `node index.js`.
4. Open the application in your browser (`http://localhost:8000`) and enter your name to join the chat.

## Features
- Real-time messaging: Users can send and receive messages instantly.
- Audio feedback: A notification sound is played for incoming messages.
- User joining and leaving notifications.
