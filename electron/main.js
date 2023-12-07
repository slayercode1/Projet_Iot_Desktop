const path = require('path')
const { app, BrowserWindow, nativeTheme } = require('electron')
const isDev = require('electron-is-dev')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })

  nativeTheme.themeSource = 'light'

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/home'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )
  if (isDev) {
    // mainWindow.webContents.openDevTools({ mode: 'detach' })
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
