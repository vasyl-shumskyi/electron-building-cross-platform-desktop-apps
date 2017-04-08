const electron = require('electron')
const { BrowserWindow, app } = electron
const ipc = electron.ipcMain


app.on('ready', function() {
  let appWindow, infoWindow


  appWindow = new BrowserWindow({
    show: false
  }) // appWindow

//appWindow.loadURL('https://electron.atom.io')
  appWindow.loadURL('file://' + __dirname + '/index.html')

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    show: false,
    frame: false
  }) // infoWindow

  infoWindow.loadURL('file://' + __dirname + '/info.html')

  appWindow.once('ready-to-show', function() {
    appWindow.show()
    /*
    // will show the popup after 1 second and hide it after 30 seconds
    setTimeout(function () {
      infoWindow.show()
      setTimeout(function () { infoWindow.hide() }, 30000);
    }, 1000);
    */
  }) // ready-to-show

  // We need to pass event and its arguments as parameters to the function!
  // Event passes some additional information in its arguments
  ipc.on('closeInfoWindow', function(event, arg){
    // sending the return value to the renderer (empty return is fine)
    event.returnValue=''
    infoWindow.hide()
  }) // closeInfoWindow
}) // app is ready
