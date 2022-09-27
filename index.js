const http = require("http");
const url = require("url");
const colors = require("colors");
var projects = require("./data-store");

const PORT = 8000;

// functions
const stringify = (data) => {
  return JSON.stringify(data);
};

const findProjectById = (id) => {
  return (foundProject = projects.find((project) => project.id == id));
};

// server
const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;
  const parts = path.split("/").slice(1);
  const customParam0 = parts[0];
  const customParam1 = parts[1];
  const foundProject = findProjectById(customParam1);

  try {
    if (customParam0 !== "projects") {
      const errorMsg = stringify({ status: 404, message: "NOT FOUND" });

      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(errorMsg);

      return res.end();
    } else if (!customParam1) {
      const errorMsg = stringify({ status: 400, message: "BAD REQUEST" });

      res.writeHead(400, { "Content-Type": "application/json" });
      res.write(errorMsg);

      return res.end();
    } else if (!foundProject) {
      const errorMsg = stringify({ status: 404, message: "NOT FOUND" });

      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(errorMsg);

      return res.end();
    } else if (req.url === `/projects/${customParam1}`) {
      const result = stringify({ status: 200, project: foundProject });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(result);

      return res.end();
    }
  } catch (error) {
    const errorMsg = stringify({
      status: 500,
      message: "Something went wrong",
    });

    res.writeHead(500, { "Content-type": "application/json" });
    res.write(errorMsg);

    return res.end();
  }
});

server.listen(PORT, (error) => {
  if (error) {
    console.log("Something went wrong".bgRed.bold, error);
  } else {
    console.log(`Server is rocking on port ${PORT}`.cyan.bold);
  }
});
