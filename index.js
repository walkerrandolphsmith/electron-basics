const { app, BrowserWindow } = require('electron');

let win;
const createWindow = () => {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadURL(`file://${__dirname}/index.html`);

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
};

app.on('ready', createWindow);