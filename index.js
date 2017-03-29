const electron = require('electron')
const { BrowserWindow, app } = electron


app.on('ready', function() {
  let appWindow;
  appWindow = new BrowserWindow()
  appWindow.loadURL('https://electron.atom.io')
})
