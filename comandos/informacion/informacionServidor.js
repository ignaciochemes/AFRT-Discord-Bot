const fs = require('fs');
//const find = require('find-process');

//Path Folder
const RUTA_FOLDER = 'C:/Users/Ignacio/Desktop/pepe';

module.exports = {
    name: "servers",
    aliases: ["sv"],
    category: "informacion",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt servers",
    run: async(client, message, args) => {
        fs.readFileSync(RUTA_FOLDER)
    }
}