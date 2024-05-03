const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: ".env" });

const PORT =
  process.env.NODE_ENV == "production"
    ? process.env.PORT_PROD
    : process.env.PORT_UAT || 3001;
const server = app.listen(PORT, (res) => {
  try {
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    throw new Error("Something went wrong!!");
  }
});
