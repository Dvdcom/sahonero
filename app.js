require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');
app.use(expressLayouts);

/* CAPAS DE MIDDLEWARES */
/*CAPA 1 - para las estaticas */
app.use(express.static(__dirname + '/public'));

/*para enviar informacion de un formulario */
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

/* CAPA 2 RUTAS*/
app.use(require('./routes/index'));
app.use(require('./routes/form-registros'));
app.use(require('./routes/bienvenida'));

/*CAPA 3 - para los 404 no existe */
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`http://localhost:${port}`));