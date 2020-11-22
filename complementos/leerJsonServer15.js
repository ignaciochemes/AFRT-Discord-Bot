'use strict';

const fs = require('fs');

//Path Folder
const RUTA_FOLDER = 'C:/Users/Ignacio/Desktop/pepe/15-Server-Zolder-Mixto/cfg/';

let configurationJson = fs.readFileSync(RUTA_FOLDER + 'configuration.json');
let eventJson = fs.readFileSync(RUTA_FOLDER + 'event.json');
let settingsJson = fs.readFileSync(RUTA_FOLDER + 'settings.json');
let dataConfigurationJson = JSON.parse(configurationJson);
let dataEventJson = JSON.parse(eventJson);
let dataSettingsJson = JSON.parse(settingsJson);
console.log(dataConfigurationJson, dataEventJson, dataSettingsJson);

module.exports = { dataConfigurationJson, dataEventJson, dataSettingsJson };