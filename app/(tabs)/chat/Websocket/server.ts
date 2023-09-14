// import * as WebSocket from 'ws';
// import * as express from 'express';

// const app = express();

// const server = app.listen(8080, () => {
//     console.log('Server is listening on port 8080');
// });

// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws: WebSocket) => {
//     ws.on('message', (message: string) => {
//         console.log(`Received message from client: ${message}`);

//         // Broadcast the message to all connected clients
//         wss.clients.forEach((client: WebSocket) => {
//             if (client != ws) {
//                 client.send(message);
//             }
//         });
//     });
// });