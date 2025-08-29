const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		fullscreen: true
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()

	// opens window if none are open (macOS)
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// quits app when all windows are closed (windows & linux)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
