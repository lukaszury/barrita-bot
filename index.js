const Discord = require("discord.js");

const client = new Discord.Client();
const prefix = "b!";

client.login(process.env.token);

client.on("ready", function(message){
    console.log("tamo");
})


client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let Canalvoz = message.member.voice.channel;

    client.user.setActivity("Comandos: b!help", {
        type: "WATCHING",
        name: "Comandos: b!help"
    });

    if (command === "help") {
        message.reply("Los sonidos disponibles son: \nfu - fua - tenshi - siri - uga - paja - chileno - urss - jugadores")
    }

    else if (command === "fua") {
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
        } else {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./sounds/fua.mp3');
        }
    }

    else if (command === "fu") {
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
        } else {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./sounds/fu.mp3');
        }
    }

    else if (command === "tenshi") {
        if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
        } else {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./sounds/tenshi.mp3');
        }
    }

    else if (command === "siri") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/siri.mp3');
            }
        } catch (error) {

        }
    }

    else if (command === "uga") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/uga.mp3');
            }
        } catch (error) {

        }
    }

    else if (command === "paja") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/paja.mp3');
            }
        } catch (error) {

        }
    }

    else if (command === "chileno") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/chileno.mp3');
            }
        } catch (error) {

        }
    }

    else if (command === "urss") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/urss.mp3');
            }
        } catch (error) {

        }
    }

    else if (command === "jugadores") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/jugadores.mp3');
            }
        } catch (error) {

        }
    }

    if (command === "join") {
        try {
            if (!Canalvoz || Canalvoz.type !== 'voice') {
                message.channel.send('Necesitas unirte a un canal de voz primero').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                message.channel.send('Ya estoy conectado a un canal de voz');
            } else {
                message.channel.send('Conectando...').then(m => {
                    Canalvoz.join().then(() => {
                        m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
                    }).catch(error => message.channel.send(error));
                }).catch(error => message.channel.send(error));
            }
        } catch (error) {

        }
    }

    else if (command === 'leave') {
        try {
            if (!Canalvoz) {
                message.channel.send('No estoy en un canal de voz.');
            } else {
                message.channel.send('Dejando el canal de voz.').then(() => {
                    Canalvoz.leave();
                }).catch(error => message.channel.send(error));
            }
        } catch (error) {

        }
    }

});

