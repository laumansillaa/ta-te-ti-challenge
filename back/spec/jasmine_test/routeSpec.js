const supertest = require('supertest')(require('../../src/app'));

describe('Routes', () => {
    describe('User', () => {
        it('Create User', () => {
            return supertest
            .post('/user/createUser')
            .send({name: "User de prueba", username: "user_test"})
            .expect(200)
            .expect('User created');
        })

        it('Create User 1 - STATUS 404', () => {
            return supertest
            .post('/user/createUser')
            .send({})
            .expect(404)
            
        })

        it('Create User 2 - STATUS 404', () => {
            return supertest
            .post('/user/createUser')
            .send({username: "user_test"})
            .expect(500)
            
        })

        it('Create User 3 - STATUS 404', () => {
            return supertest
            .post('/user/createUser')
            .send({user: "User de prueba"})
            .expect(500)
            
        })

        it('All Users', () => {
            return supertest
            .get('/user/allUser')
            .expect(200)
            .expect('Content-Type', /json/);
        })
    })

    describe('Game', () => {
        it('Create Game 1', () => {
            return supertest
            .post('/game/createGame')
            .send({
                players: ["user_test", "user_test2"], 
                winner: "user_test", 
                loser: "user_test2", 
                equality: "", 
                user: ["user_test", "user_test2"]
            })
            .expect(200)
        })

        it('Create Game 2', () => {
            return supertest
            .post('/game/createGame')
            .send({
                players: ["user_test", "user_test2"], 
                winner: "", 
                loser: "", 
                equality: "equality", 
                user: ["user_test", "user_test2"]
            })
            .expect(200)
        })

        it('Create Game 3', () => {
            return supertest
            .post('/game/createGame')
            .send({
                players: ["user_test", "user_test2"], 
                winner: "user_test", 
                loser: "user_test2", 
                equality: "", 
                user: []
            })
            .expect(404)
            .expect('Bad request');
        })

        it('Create Game 4', () => {
            return supertest
            .post('/game/createGame')
            .send({ 
                players: [],
                winner: "user_test", 
                loser: "user_test2", 
                equality: "", 
                user: ["user_test", "user_test2"]
            })
            .expect(404)
            .expect('Bad request');
        })

        it('Create Game 5', () => {
            return supertest
            .post('/game/createGame')
            .send({ 
                players: ["user_test", "user_test2"],
                winner: "", 
                loser: "", 
                equality: "", 
                user: ["user_test", "user_test2"]
            })
            .expect(404)
            .expect('Bad Request');
        })

        it('All Games', () => {
            return supertest
            .get('/game/allGame')
            .expect(200)
            .expect('Content-Type', /json/);
        })
    })




})