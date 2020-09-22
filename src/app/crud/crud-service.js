const Crud = require('./crud-model');

module.exports = {

    list: async (req, res) => {
        // Retorna de forma ordenada pelo nome a lista com todos os documentos
        try {
            const list = await Crud.find().sort({ name: 1 });
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    create: async (req, res) => {
        // Cria um documento no mongo
        try {
            await Crud.create(req.body);
            res.status(202).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    edit: async (req, res) => {
        // Edita um documento no mongo de acordo com o _id
        try {
            await Crud.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getById: async (req, res) => {
        // Retorna um documento procurando pelo _id
        try {
            const response = await Crud.findById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    delete: async (req, res) => {
        // Deleta um documento baseado no _id
        try {
            await Crud.findByIdAndDelete(req.params.id);
            res.status(200).json('success');
        } catch (error) {
            res.status(500).json(error);
        }

    }

}