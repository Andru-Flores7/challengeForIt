const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT , () => console.log(`Servidor corriendo en el puerto ${PORT}`));