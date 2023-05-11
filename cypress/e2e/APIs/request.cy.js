/// <reference types="cypress" />

describe('Teste da API Open Weather', () => {
  const api_key = '3a10ed593314291116dd7c8a8917b80b'
  const valid_city = 'São Paulo'
  const invalid_city = 'Cidade Inexistente'
  const invalid_key = 'chave_invalida'
  const city_coordinates = { lat: -23.5489, lon: -46.6388 }


    it('CT01- Deve retornar 200 para cidade de São Paulo', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: valid_city,
          appid: api_key
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('São Paulo')
        expect(response.body.sys.country).to.eq('BR')
        expect(response.body.main.temp).to.not.be.null
        expect(response.body.weather[0].main).to.not.be.null
        expect(response.body.coord.lat).to.not.be.null
        expect(response.body.coord.lon).to.not.be.null
      })
    })
  
    it('CT02- Deve retornar erro 404 para uma cidade inexistente', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: invalid_city,
          appid: api_key
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body.message).to.eq('city not found')
      })
    })
  
    it('CT03- Deve retornar erro 401 para uma chave de API inválida', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: valid_city,
          appid: invalid_key
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.')
      })
    })

    it('CT04- Deve retornar informações da cidade de São Paulo em português com código 200', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: valid_city,
          appid: api_key,
          lang: 'pt_br'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        //expect(response.body.name).to.eq(city)
        expect(response.body.sys.country).to.eq('BR')
        expect(response.body.main.temp).to.not.be.null
        expect(response.body.weather[0].description).to.not.be.null
      })
    })

    it('CT05- Deve retornar informações da cidade de São Paulo com temperatura em Celsius', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: valid_city,
          appid: api_key,
          units: 'metric'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(valid_city)
        expect(response.body.sys.country).to.eq('BR')
        expect(response.body.main.temp).to.be.a('number')
        expect(response.body.main.temp).to.be.lessThan(40)
      })
    })

    it('CT06- Deve retornar informações da cidade de São Paulo com coordenadas com código 200', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          lat: city_coordinates.lat,
          lon: city_coordinates.lon,
          appid: api_key
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        //expect(response.body.name).to.eq(city)
        expect(response.body.sys.country).to.eq('BR')
        expect(response.body.main.temp).to.not.be.null
      })
    })
})
  