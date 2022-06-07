const stock = require("./stock");
const dividend = require("./dividend");

const apiURL = "/api/v1/";

module.exports = (app) => {
  app.use(apiURL + "stocks", stock);
  app.use(apiURL + "dividends", dividend);
};
