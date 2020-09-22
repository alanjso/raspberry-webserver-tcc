const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

module.exports = {

    turnOn: async (req, res) => {
        // liga o led do GPIO 4
        try {
            LED.writeSync(1); //set pin state to 1 (turn LED on)
            res.status(200).json({ message: 'Led on GPIO 4 turned ON' });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    turnOff: async (req, res) => {
        // desliga o led do GPIO 4
        try {
            LED.writeSync(0); //set pin state to 0 (turn LED off)
            res.status(202).json({ message: 'Led on GPIO 4 turned OFF' });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    invert: async (req, res) => {
        // Edita um documento no mongo de acordo com o _id
        let msg = '';
        try {
            if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
                LED.writeSync(1); //set pin state to 1 (turn LED on)
                msg = 'Led on GPIO 4 turned ON';
            } else {
                LED.writeSync(0); //set pin state to 0 (turn LED off)
                msg = 'Led on GPIO 4 turned OFF';
            }
            res.status(200).json({ message: msg });
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
