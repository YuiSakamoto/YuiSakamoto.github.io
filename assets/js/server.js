const connect = require('connect');
const serveStatic = require('serve-static');

const app = connect();

app.use(serveStatic('./'));
app.listen(8000);
