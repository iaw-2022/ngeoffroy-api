require('dotenv').config({ path: "src/.env" })
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require("path")

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "Api Rest | IAW UNS",
            description: "API",
            contact: {
                name: "ngeoffroy"
            },
            servers: [process.env.SERVER]
        }
    },
    apis: [`${path.join(__dirname, "src/routes/*.js")}`],
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);

const serve = swaggerUi.serve;
const setup = swaggerUi.setup(swaggerDocs);
module.exports = {
    serve,
    setup,
};