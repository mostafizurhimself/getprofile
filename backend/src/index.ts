import app from "./app";

const port = process.env.APP_PORT || 3000;

// Boot the server.
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
