const electron = require('electron')
const { BrowserWindow, app } = electron


app.on('ready', function() {
  let appWindow, infoWindow

  appWindow = new BrowserWindow()
  appWindow.loadURL('https://electron.atom.io')

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false
  })

  infoWindow.loadURL('file://' + __dirname + '/info.html')
})
