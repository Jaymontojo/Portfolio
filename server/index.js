const setupServer = require('./server');
const PORT = process.env.PORT || 3000;
const server = setupServer();

server.listen(PORT, () => {
  console.log(`app is listening @http://localhost:${PORT}`)
})