const crudService = require('./crud-service');

module.exports = routes => {

    const SERVICE = '/cruds'

    routes.get(`${SERVICE}`, crudService.list);

    routes.post(`${SERVICE}`, crudService.create);

    routes.put(`${SERVICE}/:id`, crudService.edit);

    routes.delete(`${SERVICE}/:id`, crudService.delete);

    routes.get(`${SERVICE}/:id`, crudService.getById);
}