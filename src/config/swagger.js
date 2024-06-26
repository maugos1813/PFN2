import swaggerAutogen from 'swagger-autogen'

const doc = {

  info: {

    title: 'API Rest blogging',

    description: 'Esta es la API para el manejo de un bloggin.'

  },

  host: 'localhost:3000'

}

const outputFile = './swagger-output.json'

const routes = ['./src/index.js']

swaggerAutogen()(outputFile, routes, doc)
