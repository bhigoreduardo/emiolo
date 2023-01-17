const env = process.env.NODE_ENV || "dev";

const config = () => {
  switch (env) {
    case "dev":
      return {
        DB_URL: "mongodb+srv://bhigoreduardo:admin@clusterlearn.pfdyhfe.mongodb.net/?retryWrites=true&w=majority",
        SECRET: "Askdu1y2378asSDJhawe65103kASd$",
        TOKEN_EXPIRE: "7d",
      };
    case "hml":
      return {
        DB_URL: "mongodb+srv://bhigoreduardo:admin@clusterlearn.pfdyhfe.mongodb.net/?retryWrites=true&w=majority",
        SECRET: "Askdu1y2378asSDJhawe65103kASd$",
        TOKEN_EXPIRE: "7d",
      };
    case "prod":
      return {
        DB_URL: "mongodb+srv://bhigoreduardo:admin@clusterlearn.pfdyhfe.mongodb.net/?retryWrites=true&w=majority",
        SECRET: "Askdu1y2378asSDJhawe65103kASd$",
        TOKEN_EXPIRE: "7d",
      };
  }
};

console.log(env);
module.exports = config();
