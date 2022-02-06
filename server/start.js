const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 5555);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
