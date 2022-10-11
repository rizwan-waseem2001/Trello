const express = require('express');
const app = express();

app.get('/', (request, response) => response.send('HELLO WORLD RIZWAN!'));



app.get('/dynamic:name', (request, response) => {


    const { name } = request.params;
    response.send('HELLO!' + name);
})
app.listen(4040);

