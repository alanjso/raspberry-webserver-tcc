module.exports = (url, database) => {

    const mongoose = require('mongoose');
    const connect = url ? url : "localhost";
    const genericApiDatabase = database ? database : 'genericapi';
    mongoose.connect(`mongodb://${connect}/${genericApiDatabase}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

    mongoose.connection.on('connected', function () {
        console.log(' ==> Conectado ao MongoDB com sucesso <== ');
    });

    mongoose.connection.on('error', function (error) {
        console.log(' ** Erro ao conectar ao MongoDB ** ');
        console.log(' ** Erro: ' + error + ' ** ');
    });

    mongoose.connection.on('disconnected', function () {
        console.log(' ==> Desconectado com sucesso do MongoDB <==');
    });
}