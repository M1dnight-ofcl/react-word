import './index.css';
const ipc = require('electron').ipcRenderer
window.$ = window.jQuery = require('jquery')



document.getElementById('close').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked [x]');
    ipc.send('close');
})
document.getElementById('minimize').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked [-]');
    ipc.send('min');
})
document.getElementById('maximize').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked [+]');
    ipc.send('max');
})

import './index.jsx';