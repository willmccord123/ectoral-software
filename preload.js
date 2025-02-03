const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    login: (credentials) => ipcRenderer.invoke('login', credentials),
});