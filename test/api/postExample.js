const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 12345,
            "username": "nabilland",
            "firstName": "nabilla",
            "lastName": "nurulita",
            "email": "nabilland@mailsac.com",
            "password": "12345",
            "phone": "081234567891",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})