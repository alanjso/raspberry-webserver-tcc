const app = require('./server');
const config = require('config');
const port = config.get('port');

app.listen(port, () => {
    console.log('========================================================================');
    console.log(`API server running on port ${port}`);
    console.log(`Telegram Bot using Token: ${config.get('telegramToken')}`);
    console.log('========================================================================');
});