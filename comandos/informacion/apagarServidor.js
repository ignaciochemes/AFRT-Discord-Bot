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
const STOP_RUTA_SERVER_8 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer8.bat';
const STOP_RUTA_SERVER_9 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer9.bat';
const STOP_RUTA_SERVER_10 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer10.bat';
const STOP_RUTA_SERVER_11 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer11.bat';
const STOP_RUTA_SERVER_12 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer12.bat';
const STOP_RUTA_SERVER_13 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer13.bat';
const STOP_RUTA_SERVER_14 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer14.bat';
const STOP_RUTA_SERVER_15 = 'C:\\Users\\Ignacio\\Desktop\\bash\\Server2\\stopServer15.bat';

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
                            const stopServer = spawn(STOP_RUTA_SERVER_0, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '1') {
            await find('port', 9622)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_1, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '2') {
            await find('port', 9623)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_2, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '3') {
            await find('port', 9624)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_3, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '4') {
            await find('port', 9625)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_4, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '5') {
            await find('port', 9626)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_5, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '6') {
            await find('port', 9627)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_6, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '7') {
            await find('port', 9628)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_7, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '8') {
            await find('port', 9629)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_8, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '9') {
            await find('port', 9630)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_9, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '10') {
            await find('port', 9631)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_10, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '11') {
            await find('port', 9632)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_11, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '12') {
            await find('port', 9633)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_12, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '13') {
            await find('port', 9634)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_13, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '14') {
            await find('port', 9635)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_14, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
                                return message.channel.send(`${data}`)
                                    .then(m => m.delete({timeout: 15000}));
                            });
                        }, 15000);
                        message.reply(`El servidor \`${args[0]}\` se apagara en 15 segundos`)
                    }
                });
        }
        if (args[0] === '15') {
            await find('port', 9636)
                .then(function (list) {
                    if (!list.length) {
                        message.reply(`El servidor ${args[0]} esta apagado. Esta seguro que introdujo el numero correcto?`)
                            .then(m => m.delete({timeout: 10000}));
                    } else {
                        setTimeout(function(){
                            const stopServer = spawn(STOP_RUTA_SERVER_15, ['-lh', '/usr']);
                            stopServer.stdout.on('data', (data) => {
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