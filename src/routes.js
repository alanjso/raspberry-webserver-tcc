const { Router } = require('express');
const routes = new Router();
require('./app/Telegram/telegramBot');

routes.get('/health', (req, res) => {
    res.status(200).json({ Raspberry_Webserver: 'Server UP' });
});

require('./app/crud/crud-route')(routes);
require('./app/GPIO/gpio-route')(routes);

module.exports = routes;