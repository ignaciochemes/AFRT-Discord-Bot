const { spawn } = require('child_process');
const find = require('find-process');

//Constantes de STOP SERVER
const STOP_RUTA_SERVER_0 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server0\\stopServer0.bat';
const STOP_RUTA_SERVER_1 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server1\\stopServer1.bat';
const STOP_RUTA_SERVER_2 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer2.bat';
const STOP_RUTA_SERVER_3 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer3.bat';
const STOP_RUTA_SERVER_4 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer4.bat';
const STOP_RUTA_SERVER_5 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer5.bat';
const STOP_RUTA_SERVER_6 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer6.bat';
const STOP_RUTA_SERVER_7 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer7.bat';

//Variables Minutos a contratar vacias
let minutosContratarServer0 = [];
let minutosContratarServer1 = [];
let minutosContratarServer2 = [];
let minutosContratarServer3 = [];
let minutosContratarServer4 = [];
let minutosContratarServer5 = [];
let minutosContratarServer6 = [];
let minutosContratarServer7 = [];

module.exports = {
    name: "apagar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
    usage: "!afrt levantar",
    run: async(client, message, args) => {
        if (!args[0]) return message.reply(`Por favor, ingresa un numero de algun servidor. Por ejemplo: !afrt apagar 2\nSi no conoces los servidores (presets), tipea \`!afrt servers\` y da enter. \nEste mensaje se eleiminara en 30 segundos`)
            .then(m => m.delete({timeout: 30000}));

        if (args[0] === '0') {
            await find('port', 9621)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer0 = spawn(STOP_RUTA_SERVER_0, ['-lh', '/usr']);
                            stopServer0.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        //await message.channel.send(STDOUT);
        console.log("Se ejecuto el comando !afrt apagar");
    }
}