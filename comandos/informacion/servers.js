const fs = require('fs');
const find = require('find-process');

//Path Folder
const RUTA_FOLDER = 'C:/Users/Ignacio/Desktop/pepe';

//Variable de todas las carpetas
let carpetas = [];

let server0 = [];
let server1 = [];
let server2 = [];
let server3 = [];
let server4 = [];
let server5 = [];
let server6 = [];
let server7 = [];

module.exports = {
    name: "servers",
    aliases: ["sv"],
    category: "informacion",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt servers",
    run: async(client, message, args) => {
        await fs.readdir(RUTA_FOLDER, function (err, archivos) {
            if (err) {
                onError(err);
                return;
            } else {
                carpetas = archivos;
            }
            //console.log(archivos);
            //archivos.forEach(carpetasInside => {
                //console.log(archivos);
            //})
            //message.channel.send(archivos);
        });

        //Comienzo de Ping
        //Verificamos si los servidores estan apagados.

        await find('port', 9621)
            .then(function (list) {
                if (!list.length) {
                    server0 = `${carpetas[0]} = OFF`;
                } else {
                    server0 = `${carpetas[0]} = ON`;
                }
            });
        await find('port', 9622)
            .then(function (list) {
                if (!list.length) {
                    server1 = `${carpetas[1]} = OFF`;
                } else {
                    server1 = `${carpetas[1]} = ON`;
                }
            });
        await find('port', 9623)
            .then(function (list) {
                if (!list.length) {
                    server2 = `${carpetas[2]} = OFF`;
                } else {
                    server2 = `${carpetas[2]} = ON`;
                }
            });
        await find('port', 9624)
            .then(function (list) {
                if (!list.length) {
                    server3 = `${carpetas[3]} = OFF`;
                } else {
                    server3 = `${carpetas[3]} = ON`;
                }
            });
        await find('port', 9625)
            .then(function (list) {
                if (!list.length) {
                    server4 = `${carpetas[4]} = OFF`;
                } else {
                    server4 = `${carpetas[4]} = ON`;
                }
            });
        await find('port', 9626)
            .then(function (list) {
                if (!list.length) {
                    server5 = `${carpetas[5]} = OFF`;
                } else {
                    server5 = `${carpetas[5]} = ON`;
                }
            });
        await find('port', 9627)
            .then(function (list) {
                if (!list.length) {
                    server6 = `${carpetas[6]} = OFF`;
                } else {
                    server6 = `${carpetas[6]} = ON`;
                }
            });
        await find('port', 9628)
            .then(function (list) {
                if (!list.length) {
                    server7 = `${carpetas[7]} = OFF`;
                } else {
                    server7 = `${carpetas[7]} = ON`;
                }
            });
        message.reply(`Si quieres puedes levantar cualquiera de los servidores ahora mencionados. Para ello, tienes que teclear !afrt levantar + el numero.
        \n${server0} \n${server1} \n${server2} \n${server3} \n${server4} \n${server5} \n${server6} \n${server7}`);
        console.log("Se ejecuto el comando !afrt servers");
    }
}