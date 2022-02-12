const http =  require('http');

//in the code below we startup a nodejs local server with the port 5000, int he parameters req (means requirement) and res (means response), do all the work as in req is the request coming in from the client and res is the subsequent response we provide the user.
const server = http.createServer((req, res)=>{

if(req.url === '/'){

    res.end('Welcome to the homepage')
}
if(req.url === '/about'){

    res.end('This was an awesome project made at 4 AM')
}

if(req.url != '/' && req.url !='/about' ){

    res.end(
        `<h1>404 Oops!</h1>
        <p> Looks like your trying to access a restricted area</p>
        <a href="/"> Go back home</a>`
    )
}
})

server.listen(5000);