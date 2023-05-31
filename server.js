const express = require('express');
const app = express();
const path = require('path');

// Configuración para servir archivos estáticos
app.use(express.static('public'));

// Cuando visitas la ruta principal ('/'), envía el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación escuchando en el puerto 3000!');
});
