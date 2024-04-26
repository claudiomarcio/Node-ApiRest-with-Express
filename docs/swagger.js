const swaggerAutogen = require('swagger-autogen')();

/* Swagger configuration */
const options = {
    openapi: 'OpenAPI 3',   // Enable/Disable OpenAPI. By default is null
    language: 'en-US',      // Change response language. By default is 'en-US'
    disableLogs: false,     // Enable/Disable logs. By default is false
    autoHeaders: false,     // Enable/Disable automatic headers capture. By default is true
    autoQuery: false,       // Enable/Disable automatic query capture. By default is true
    autoBody: false         // Enable/Disable automatic body capture. By default is true
}

const doc = {
  info: {
    version: '1.0.0',      // by default: '1.0.0'
    title: 'Node ApiRest with Express',        // by default: 'REST API'
    description: 'Crud API Rest with Node and Express',  // by default: ''
    contact: {
        'name': 'Claudio Marcio',
        'email': 'claudiomarcio89@hotmail.com'
    },
  },
  host: 'localhost:8082',      // by default: 'localhost:3000'
  basePath: '/',  // by default: '/'
  schemes: ['http'],   // by default: ['http']
  consumes: ['application/json'],  // by default: ['application/json']
  produces: ['application/json'],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
        name: 'Health',
        description: 'Health Check'
    }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {
    helathResponse: {
      code: "200",
      message: "msg.response.CAG001.message",
    },
    'errorResponse.400': {
      code: "400",
      message: "msg.response.CAGE002.message",
    },
    'errorResponse.403': {
      code: "403",
      message: "msg.response.CAGE001.message",
    },
    'errorResponse.404': {
      "code": "404",
      "message": "Not found",
    },
    'errorResponse.500': {
      code: "500",
      message: "msg.response.CAGE003.message",
    }
  },          // by default: empty object (Swagger 2.0)
};

const outputFile = './docs/swagger.json';
const routes = ['./api/routes/customerWallets.js', './routes/*.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */
swaggerAutogen(outputFile, routes, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require('./index.js'); // Your project's root file
//   });