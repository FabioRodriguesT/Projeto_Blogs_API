const express = require('express');
const { loginRoute, userRoute, categoryRoute, postRoute } = require('./routes');
// ...

const app = express();
app.use(loginRoute);
app.use(userRoute);
app.use(categoryRoute);
app.use(postRoute);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send({ status: 'Blogs Api UP!' });
});

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
