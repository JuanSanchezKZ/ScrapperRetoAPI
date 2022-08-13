import restify from "restify";
import { executeQueries } from "../database/db";
const port = process.env.PORT || 3000;

const server = restify.createServer({
  name: "scrapper",
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.jsonp());
server.use(
  restify.plugins.bodyParser({
    mapParams: false,
  })
);

server.pre((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  return next();
});

server.get("/user", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(req.body));
});

// server.get("/user/:id", (req, res, next) => {
//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(JSON.stringify(users[parseInt(req.params.id)]));
// });

server.post("/user", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.write(JSON.stringify(req.body));
  executeQueries(JSON.parse(req.body));
  res.end();
});

server.listen(port, () => {
  console.info(`api is running on port ${port}`);
});
