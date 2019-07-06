const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = Number(process.env.PORT || 4000);

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log('JSON Server is running')
});