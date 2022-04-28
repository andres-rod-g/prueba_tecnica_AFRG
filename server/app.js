const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Rutado
app.use('/api', require('./router/Api_routes'));

app.use((req, res, next) => {
    res.status(404).json({"response": "Not found"})
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})