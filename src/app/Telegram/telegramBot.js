const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const TelegramBot = require('node-telegram-bot-api');
const config = require('config');
const TOKEN = config.get('telegramToken');
const autoBots = new TelegramBot(TOKEN, { polling: true });

autoBots.on('message', function (msg) {
    // console.log('msg', msg);
});

const logErrorEcho = function logErrorEcho(msg) {
    return function (err) {
        // return console.log(msg, err);
    };
};

const logSuccessEcho = function (msg, match) {
    return function (data) {
        // console.log('Success:', data);
    };
};

const sendEcho = function (msg, match) {
    autoBots.sendMessage(msg.chat.id, match[1])
        .then(logSuccessEcho(msg, match))
        .catch(logErrorEcho('Error:'));
};

autoBots.onText(/\/echo (.*)/, sendEcho);

autoBots.onText(/\/turnOn (.*)/, async function (msg, match) {
    try {
        const LED = new Gpio(parseInt(match[1]), 'out')
        LED.writeSync(1);
        autoBots.sendMessage(msg.chat.id, `Ligando Pino ${match[1]}`);
        autoBots.sendMessage(698412369,
            `${msg.chat.first_name} ${msg.chat.last_name} (@${msg.chat.username}) ligou o pino ${match[1]} de sua raspberry!`);
    } catch (error) {
        autoBots.sendMessage(msg.chat.id, `Erro no '/turnOn ${match[1]}'\n Error: ${JSON.stringify(error.code)}`);
    }
});
autoBots.onText(/\/turnOff (.*)/, async function (msg, match) {
    try {
        const LED = new Gpio(parseInt(match[1]), 'out');
        LED.writeSync(0);
        autoBots.sendMessage(msg.chat.id, `Desligando Pino ${match[1]}`);
        autoBots.sendMessage(698412369,
            `${msg.chat.first_name} ${msg.chat.last_name} (@${msg.chat.username}) desligou o pino ${match[1]} de sua raspberry!`);
    } catch (error) {
        autoBots.sendMessage(msg.chat.id, `Erro no '/turnOff ${match[1]}'\n Error: ${JSON.stringify(error.code)}`);
    }
});

autoBots.onText(/\/invert (.*)/, async function (msg, match) {
    try {
        const LED = new Gpio(parseInt(match[1]), 'out');
        let texto = '';
        if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
            LED.writeSync(1); //set pin state to 1 (turn LED on)
            texto = `Pino ${match[1]} ligado`;
        } else {
            LED.writeSync(0); //set pin state to 0 (turn LED off)
            texto = `Pino ${match[1]} desligado`;
        }
        autoBots.sendMessage(msg.chat.id, texto);
        autoBots.sendMessage(698412369,
            `${msg.chat.first_name} ${msg.chat.last_name} (@${msg.chat.username}) inverteu o pino ${match[1]} de sua raspberry!`);
    } catch (error) {
        autoBots.sendMessage(msg.chat.id, `Erro no '/invert ${match[1]}'\n Error: ${JSON.stringify(error.code)}`);
    }
});

autoBots.sendMessage(698412369, `Olá, Autobots Residencial iniciado!`);