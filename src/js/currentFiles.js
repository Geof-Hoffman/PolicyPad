const electron = require('electron');
const { ipcRenderer } = electron;

const form =  document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    const files = document.querySelector('#currentFiles').value;
    var filesList = files.split(/\s/);
    var i;
    var text = '';
    for (i = 0; i < filesList.length; i++) {
        text += filesList[i] + "<br>";
        document.getElementById("current").innerHTML = text;
        document.getElementById('currentFiles').value='';
        };
        localStorage.setItem('filesList', filesList);  
        ipcRenderer.send('filesList:send', filesList);                 
    };
