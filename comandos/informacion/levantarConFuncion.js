const Discord = require('discord.js');
const { spawn } = require('child_process');

//Constantes de START SERVER
const START_RUTA_SERVER_0 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server0\\startServer0.bat';
const START_RUTA_SERVER_1 = 'C:\\Users\\Ignacio\\Desktop\\startServer1.bat';
const START_RUTA_SERVER_2 = 'C:\\Users\\Ignacio\\Desktop\\startServer2.bat';
const START_RUTA_SERVER_3 = 'C:\\Users\\Ignacio\\Desktop\\startServer3.bat';
const START_RUTA_SERVER_4 = 'C:\\Users\\Ignacio\\Desktop\\startServer4.bat';
const START_RUTA_SERVER_5 = 'C:\\Users\\Ignacio\\Desktop\\startServer5.bat';
const START_RUTA_SERVER_6 = 'C:\\Users\\Ignacio\\Desktop\\startServer6.bat';
const START_RUTA_SERVER_7 = 'C:\\Users\\Ignacio\\Desktop\\startServer7.bat';

//Constantes de STOP SERVER
const STOP_RUTA_SERVER_0 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server0\\stopServer0.bat';
const STOP_RUTA_SERVER_1 = 'C:\\Users\\Ignacio\\Desktop\\stopServer1.bat';
const STOP_RUTA_SERVER_2 = 'C:\\Users\\Ignacio\\Desktop\\stopServer2.bat';
const STOP_RUTA_SERVER_3 = 'C:\\Users\\Ignacio\\Desktop\\stopServer3.bat';
const STOP_RUTA_SERVER_4 = 'C:\\Users\\Ignacio\\Desktop\\stopServer4.bat';
const STOP_RUTA_SERVER_5 = 'C:\\Users\\Ignacio\\Desktop\\stopServer5.bat';
const STOP_RUTA_SERVER_6 = 'C:\\Users\\Ignacio\\Desktop\\stopServer6.bat';
const STOP_RUTA_SERVER_7 = 'C:\\Users\\Ignacio\\Desktop\\stopServer7.bat';

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
    name: "levantarConfuncion",
    aliases: ["lv"],
    category: "informacion",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt levantar",
    run: async(client, message, args) => {

        if (!args[0]) return message.reply(`Por favor, ingresa un numero de algun servidor. Por ejemplo: !afrt levantar 2\nSi no conoces los servidores (presets), tipea \`!afrt servers\` y da enter. \nEste mensaje se eleiminara en 30 segundos`)
            .then(m => m.delete({timeout: 30000}));

        if (args[0] === '0') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                return minutosContratarServer0 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer0}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer0 = spawn(START_RUTA_SERVER_0, ['-lh', '/usr']);
                    startServer0.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer0.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer0.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer0}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs0r = Math.floor(minutosContratarServer0*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs0r+CINCOMINUTOS)-minutosContratarServer0);
                setTimeout(function(){
                    const stopServer0 = spawn(STOP_RUTA_SERVER_0, ['-lh', '/usr']);
                    stopServer0.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs0r));
            });
        }
        if (args[0] === '1') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer1 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer1}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer1 = spawn(START_RUTA_SERVER_1, ['-lh', '/usr']);
                    startServer1.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer1.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer1.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer1}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
            });
            let mcs0r = Math.floor(minutosContratarServer1*60000);
            const CINCOMINUTOS = Math.floor(5*60000);
            setTimeout(function(){
                message.reply(`El servidor se apagara en \`5 minutos\``)
            }, Math.floor(mcs0r+CINCOMINUTOS)-minutosContratarServer1);
            setTimeout(function(){
                const stopServer1 = spawn(STOP_RUTA_SERVER_1, ['-lh', '/usr']);
                stopServer1.stdout.on('data', (data) => {
                    return message.channel.send(`${data}`)
                        .then(m => m.delete({timeout: 15000}));
                });
            }, Math.floor(mcs0r));
        }
        //await message.channel.send(STDOUT);
        console.log("Se ejecuto el comando !afrt levantar");
    }
}