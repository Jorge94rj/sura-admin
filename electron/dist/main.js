"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/sura-admin/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    //win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
/**For mac, uncomment */
/*
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})
*/
//# sourceMappingURL=main.js.map