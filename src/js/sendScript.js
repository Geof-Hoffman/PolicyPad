const electron = require('electron');
const { ipcRenderer } = electron;
ipcRenderer.on('filesList:send', function(e, files){      
  var i;
  var text = '';
  for (i = 0; i < files.length; i++) {
      text += files[i] + "<br>";
      document.getElementById("current").innerHTML = text;
      };          
})