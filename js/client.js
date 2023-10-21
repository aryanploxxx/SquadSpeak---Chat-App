const socket = io('http://127.0.0.1:8000');
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container"); 
// jab bhi message aayega is query me dal jayega

const append = (message,position)=> {
    const messageElement = document.createElement('div')
    messageElement.innerHTML=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

var audio = new Audio('./note.mp3');
// This is the vanilla js method to initialize any audio

form.addEventListener('submit', (e)=> {
    e.preventDefault(); // this will prevent the page from getting reloaded
    const message = messageInput.value;
    append(`You: ${message}`,'right');
    // isse hamko pata chal jayega what we have sent, baaki logo ko
    socket.emit('send',message);
    messageInput.value='';
    audio.play();
    // Play the audio when form is submitted and other users recieve the message.
})

audio.play().catch(error => {
    console.error("Audio playback error:", error);
});

const user_name = prompt("Enter your name to join: ");
socket.emit('new-user-joined', user_name);
// event emit hua hai jo index.js me pakda jayega and o/p aayega

// socket.on('connect_error', (error) => {
//     console.log('Connection Error:', error);
// });

socket.on('user-joined', user_name=>{
    append(`${user_name} joined the chat.`,'right'); // user-joined function index.js me name hi emit kar rha tha
});

socket.on('recieve', data =>{ // recieve event se ek object mil rha hai, usko hamne short me data naam ke object me store krlia
    append(`${data.user_name}: ${data.message}`,'left'); // user-joined function index.js me name hi emit kar rha tha
});

socket.on('left', user_name=>{
    append(`${user_name} left the chat.`,'left'); // user-joined function index.js me name hi emit kar rha tha
});



// entry.2005620554=aryan
// entry.1045781291=aryan@gmail.com
// entry.1166974658=9289282726