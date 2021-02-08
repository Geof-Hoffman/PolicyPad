const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain }  = electron ;
const path = require('path');
const url = require('url');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createMainWindow = () => {
 
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
    }  
  }); 
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../html/index.html'));  
  
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  ipcMain.on('filesList:send', function(e, item){
    console.log(item);
    mainWindow.webContents.send('filesList:send', item);
    currentFileWindow.close();
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //insert Menu
  Menu.setApplicationMenu(mainMenu);
};
const createCurrentFilesWindow = () => {
  currentFileWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: true,
    webPreferences:{
      nodeIntegration: true,
    },
    title:'Paste in or Clear Current Files '
  });
  currentFileWindow.loadFile(path.join(__dirname, '../html/current.html'));
  currentFileWindow.webContents.openDevTools();
  //garbage collection
  currentFileWindow.on('closed',()=> currentFileWindow=null);  
};





// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//Create Menu Template 
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Update Current Files List',
        click(){
          createCurrentFilesWindow();
        }
      },
      {
        label: 'View Problem Files list'
      },
      {
        label:'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }     
    ]
  },
  {
    label: '&Edit',
    submenu: [
      {label:'edit state data'}
    ]
  },
  {
    label: 'Links',
    submenu: []
  },
  {
    label:'&Help',
    submenu: [
      {
        label:'DON\'T PANIC'
      },
      {
        label: 'Activate Bat-Signal'
      }
    
  ]
  }

];
// If mac, add empty item to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

//add dev tools if not in prodcumtion
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Dev Tools',
    submenu: [
      {
        label: 'Toggle Dev Tools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}