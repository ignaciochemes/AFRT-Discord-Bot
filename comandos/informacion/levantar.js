const { spawn } = require('child_process');

//Constantes de START SERVER
const START_RUTA_SERVER_0 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server0\\startServer0.bat';
const START_RUTA_SERVER_1 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server1\\startServer1.bat';
const START_RUTA_SERVER_2 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer2.bat';
const START_RUTA_SERVER_3 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer3.bat';
const START_RUTA_SERVER_4 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer4.bat';
const START_RUTA_SERVER_5 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer5.bat';
const START_RUTA_SERVER_6 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer6.bat';
const START_RUTA_SERVER_7 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\startServer7.bat';

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
    name: "levantar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
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

                minutosContratarServer0 = collected.first().content;

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
                let mcs1r = Math.floor(minutosContratarServer1*60000);
                const CINCOMINUTOS = Math.floor(5*60000);

                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs1r-CINCOMINUTOS));
                setTimeout(function(){
                    const stopServer1 = spawn(STOP_RUTA_SERVER_1, ['-lh', '/usr']);
                    stopServer1.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs1r));
            });
        }
        if (args[0] === '2') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer2 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer2}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer2 = spawn(START_RUTA_SERVER_2, ['-lh', '/usr']);
                    startServer2.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer2.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer2.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer2}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs2r = Math.floor(minutosContratarServer2*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs2r+CINCOMINUTOS)-minutosContratarServer2);
                setTimeout(function(){
                    const stopServer2 = spawn(STOP_RUTA_SERVER_2, ['-lh', '/usr']);
                    stopServer2.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs2r));
            });
        }
        if (args[0] === '3') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer3 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer3}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer3 = spawn(START_RUTA_SERVER_3, ['-lh', '/usr']);
                    startServer3.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer3.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer3.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer3}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs3r = Math.floor(minutosContratarServer3*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs3r+CINCOMINUTOS)-minutosContratarServer3);
                setTimeout(function(){
                    const stopServer3 = spawn(STOP_RUTA_SERVER_3, ['-lh', '/usr']);
                    stopServer3.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs3r));
            });
        }
        if (args[0] === '4') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer4 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer4}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer4 = spawn(START_RUTA_SERVER_4, ['-lh', '/usr']);
                    startServer4.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer4.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer4.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer4}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs4r = Math.floor(minutosContratarServer4*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs4r+CINCOMINUTOS)-minutosContratarServer4);
                setTimeout(function(){
                    const stopServer4 = spawn(STOP_RUTA_SERVER_4, ['-lh', '/usr']);
                    stopServer4.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs4r));
            });
        }
        if (args[0] === '5') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer5 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer5}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer5 = spawn(START_RUTA_SERVER_5, ['-lh', '/usr']);
                    startServer5.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer5.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer5.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer5}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs5r = Math.floor(minutosContratarServer5*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs5r+CINCOMINUTOS)-minutosContratarServer5);
                setTimeout(function(){
                    const stopServer5 = spawn(STOP_RUTA_SERVER_5, ['-lh', '/usr']);
                    stopServer5.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs5r));
            });
        }
        if (args[0] === '6') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer6 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer6}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer6 = spawn(START_RUTA_SERVER_6, ['-lh', '/usr']);
                    startServer6.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer6.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer6.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer6}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs6r = Math.floor(minutosContratarServer6*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs6r+CINCOMINUTOS)-minutosContratarServer6);
                setTimeout(function(){
                    const stopServer6 = spawn(STOP_RUTA_SERVER_6, ['-lh', '/usr']);
                    stopServer6.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs6r));
            });
        }
        if (args[0] === '7') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer7 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 180) {
                    return message.reply(`Como maximo 180 minutos. Ingresaste ${minutosContratarServer7}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                try {
                    const startServer7 = spawn(START_RUTA_SERVER_7, ['-lh', '/usr']);
                    startServer7.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                    startServer7.stderr.on('data', (data) => {
                        return console.error(`stderr: ${data}`);
                    });
                    startServer7.on('close', (code) => {
                        return console.log(`child process exited with code ${code}`);
                    });
                    setTimeout(function(){
                        message.reply(`El servidor seleccionado se levanto perfectamente con una duracion de \`${minutosContratarServer7}\` minutos.`)
                    }, 3000);

                } catch (e) {
                    if (e) {
                        console.error(e);
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                            .then(m => m.delete({timeout: 10000}, client.destroy()))
                    }
                }
                let mcs7r = Math.floor(minutosContratarServer7*60000);
                const CINCOMINUTOS = Math.floor(5*60000);
                setTimeout(function(){
                    message.reply(`El servidor se apagara en \`5 minutos\``)
                }, Math.floor(mcs7r+CINCOMINUTOS)-minutosContratarServer7);
                setTimeout(function(){
                    const stopServer7 = spawn(STOP_RUTA_SERVER_7, ['-lh', '/usr']);
                    stopServer7.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: 15000}));
                    });
                }, Math.floor(mcs7r));
            });
        }
        //await message.channel.send(STDOUT);
        console.log("Se ejecuto el comando !afrt levantar");
    }
}