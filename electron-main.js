const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 1920,
		height: 1080,
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
