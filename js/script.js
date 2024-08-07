document.addEventListener('DOMContentLoaded', () => {
    const socket = io(); 
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            socket.emit('sendMessage', message);
            messageInput.value = '';
        }
    });

    socket.on('receiveMessage', (message) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    });
});
