const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome")
    } 
    res.end("oops")
})
console.log(server)
server.listen(5000)
