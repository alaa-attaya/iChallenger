process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true,
    },
    icon: path.join(__dirname, "assets/images/iChallenger.png"),
  });

  win.setMinimumSize(300, 300);

  win.loadFile(path.join(__dirname, "views/login.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

let websiteWindow = null;

ipcMain.on("open-website-window", () => {
  win.webContents.send("set-websitebutton-background-color");
  if (websiteWindow && !websiteWindow.isDestroyed()) {
    websiteWindow.close();
  } else {
    websiteWindow = new BrowserWindow({
      width: 1280,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
      },
      icon: path.join(app.getAppPath(), "assets/images/iChallenger.png"),
    });

    websiteWindow.loadURL("https://localhost:3000");

    websiteWindow.show();
  }

  websiteWindow.on("closed", () => {
    win.webContents.send("remove-websitebutton-background-color");
  });
});
