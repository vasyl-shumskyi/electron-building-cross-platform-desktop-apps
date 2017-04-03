const electron = require('electron')
const { BrowserWindow, app } = electron


app.on('ready', function() {
  let appWindow, infoWindow


  appWindow = new BrowserWindow({
    show: false
  })
  appWindow.loadURL('https://electron.atom.io')

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    show: false,
    frame: false
  })

  infoWindow.loadURL('file://' + __dirname + '/info.html')

  appWindow.once('ready-to-show', function() {
    appWindow.show()
    // will show the popup after 1 second and hide it after 3 seconds
    setTimeout(function () {
      infoWindow.show()
      setTimeout(function () { infoWindow.hide() }, 3000);
    }, 1000);
  })
})
