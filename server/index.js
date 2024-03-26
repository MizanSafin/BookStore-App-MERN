const app = require("./app");

let PORT = process.env.PORT || 3222;
app.listen(PORT, () => {
  console.log(`App is running at the port ${PORT}`);
});
