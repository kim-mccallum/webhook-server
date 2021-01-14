const app = require("./app");

const { PORT } = require("./config");

//run the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
