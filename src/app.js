const express = require('express');
const { loginRoute } = require('./routes');
// ...

const app = express();
app.use(loginRoute);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send({ status: 'Blogs Api UP!' });
});

app.use('/login', loginRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
