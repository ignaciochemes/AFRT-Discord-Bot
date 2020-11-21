const fs = require('fs');
const find = require('find-process');

//Path Folder
const RUTA_FOLDER = 'C:/Users/Ignacio/Desktop/pepe';

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
       // fs.readdir(RUTA_FOLDER, function (err, archivos) {
           // if (err) {
               // onError(err);
               // return;
           // }
           // archivos.forEach(carpetasInside => {
                //console.log(carpetasInside);
           // })
           // message.channel.send(archivos);
        //});
        await find('port', 9621)
            .then(function (list) {
                if (!list.length) {
                    server0 = '0-Server-Batu-Mixto = OFF';
                } else {
                    server0 = '0-Server-Batu-Mixto = ON';
                }
            });
        await find('port', 9622)
            .then(function (list) {
                if (!list.length) {
                    server1 = '1-Server-Tu-Hermana = OFF';
                } else {
                    server1 = '1-Server-Tu-Hermana = ON';
                }
            });
        await find('port', 9623)
            .then(function (list) {
                if (!list.length) {
                    server2 = '2-Server-Nurbur-Mixto = OFF';
                } else {
                    server2 = '2-Server-Nurbur-Mixto = ON';
                }
            });
        await find('port', 9624)
            .then(function (list) {
                if (!list.length) {
                    server3 = '3-Server Spa Mixto = OFF';
                } else {
                    server3 = '3-Server Spa Mixto = ON';
                }
            });
        await find('port', 9625)
            .then(function (list) {
                if (!list.length) {
                    server4 = '4-Server Monza GT3 = OFF';
                } else {
                    server4 = '4-Server Monza GT3 = ON';
                }
            });
        await find('port', 9626)
            .then(function (list) {
                if (!list.length) {
                    server5 = '5-Server Kyalami GT4 = OFF';
                } else {
                    server5 = '5-Server Kyalami GT4 = ON';
                }
            });
        await find('port', 9627)
            .then(function (list) {
                if (!list.length) {
                    server6 = '6-Practice Server = OFF';
                } else {
                    server6 = '6-Practice Server = ON';
                }
            });
        await find('port', 9628)
            .then(function (list) {
                if (!list.length) {
                    server7 = '7-Practice-Server-2 = OFF';
                } else {
                    server7 = '7-Practice-Server-2 = ON';
                }
            });
        message.reply(`Si quieres puedes levantar cualquiera de los servidores ahora mencionados\n Para ello, tienes que teclear !afrt levantar + el numero`);
        message.reply(`${server0} \n${server1} \n${server2} \n${server3} \n${server4} \n${server5}`);
        console.log("Se ejecuto el comando !afrt servers");
    }
}