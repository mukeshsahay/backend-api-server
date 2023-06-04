// JSON Server module
const jsonServer = require("json-server");
const cors = require('cors')
const path = require('path')

const server = jsonServer.create();
const router = jsonServer.router("data/data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors())

// Add this before server.use(router)
server.use(
	// Add custom route here if needed
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);
server.use(router);
server.listen(3000, () => {
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;