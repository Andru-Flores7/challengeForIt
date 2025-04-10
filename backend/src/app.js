const express = require('express');
const cors = require('cors');

const PORT = 3000;
const router = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/Tasks", router);

app.listen(PORT , () => console.log(`Servidor corriendo en el puerto ${PORT}`));