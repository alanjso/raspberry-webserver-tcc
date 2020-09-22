const express = require('../src/server');
let chai = require('chai');
let request = require('supertest')(express);
let assert = chai.assert;
let Crud = require('../src/app/crud/crud-model');

const SERVICE = '/v1/cruds';
describe('########## CRUD ##########\n', function () {

    before(async () => {
        await Crud.deleteMany({});
    });

    it('Adiciona crud de maneira correta e espera status 202', async () => {
        await request.post(`${SERVICE}`)
            .send({
                'name': 'CRUD 001',
                'description': 'descricao do CRUD 001'
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '202');
            });
    });

    it('Lista crud e espera status 200', async () => {
        await request.get(`${SERVICE}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });

    });

    it('Get por id de um crud que existe e recebe status code 200', async () => {

        let crud = {
            'name': 'CRUD 02',
            'description': 'descricao do crud'
        }

        crud = await Crud.create(crud);

        await request.get(`${SERVICE}/${crud.id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Deleta um crud que existe e recebe status code 200', async () => {

        let crud = {
            'name': 'CRUD 02',
            'description': 'descricao do crud'
        }

        crud = await Crud.create(crud);

        await request.delete(`${SERVICE}/${crud.id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Edita um crud que existe e recebe status code 200', async () => {

        let crud = {
            'name': 'CRUD POST',
            'description': 'descricao do crud POST'
        }

        crud = await Crud.create(crud);

        await request.put(`${SERVICE}/${crud.id}`)
            .send({
                'name': 'CRUD put',
                'description': 'descricao do CRUD put'
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });
});