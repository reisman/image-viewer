const { app, BrowserWindow } = require('electron');

app.on('ready', function(){
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Image Viewer'
    });
    //win.setMenu(null);
    win.loadFile('index.html');
});