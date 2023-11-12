const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request example', () => {
    const response = request(baseUrl())
    .post('/user')
    .send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async () => {
        //Check response status equals to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        //Expect there is value "message" in the body response
        expect((await response).body).to.haveOwnProperty('message')
    })

    //Reporting in mochawesome
})