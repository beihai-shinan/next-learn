const express = require('express');
const next = require('next');
const dev = process.env.ENV === 'development';
const port = parseInt(process.env.PORT, 10) || 4000;
const app = next({dev, isCustomServer: true});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});