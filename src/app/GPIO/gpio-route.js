const gpio = require('./gpio-service');

module.exports = routes => {

    const SERVICE = '/gpio'

    routes.get(`${SERVICE}/turn/on`, gpio.turnOn);

    routes.get(`${SERVICE}/turn/off`, gpio.turnOff);

    routes.get(`${SERVICE}/invert`, gpio.invert);

}