const { app, BrowserWindow } = require('electron');
const path = require('path');
const child_process = require('child_process');
require('./server.js'); 
function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL('http://127.0.0.1:3000'); // your Express server
}

// Start the Express server in the background
function startServer() {
  const server = child_process.spawn('node', ['server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true,
  });
}

app.whenReady().then(() => {
  startServer();
  setTimeout(createWindow, 1000); // wait briefly for the server to start
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
