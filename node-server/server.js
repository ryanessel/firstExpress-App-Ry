const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((request, response) => {
    // console.log({cwd: process.cwd(), request, response});

    const serve = (pathToFile) => {

        response.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile(pathToFile, "utf8", (err, content) => {
            if(err) {
                console.log('There was an error getting your page! ', err);
                response.writeHead(404);
                let indexFile = JSON.stringify({error: "Resourse Not Found! ", err});
                response.end(indexFile);
            }

            response.end(content);
        })
    }



        // ====== Routes ============

        switch(request.url) {
            case '/':
                // console.log('Home Page <<<<<<<<<<<<<<<<<<<<<<<<< ', {path: path.join(process.cwd(), 'index.html')});
                serve(path.join(process.cwd(), 'index.html'));
                break;
            case '/about':
                serve(path.join(process.cwd(), 'about.html'));
                break;
            default:
                console.log('Error!!');
                serve('.error', '.error');
                break;
        }





    // response.write('Hello World - From your local terminal!');
//     if(request.url === '/') {
//         response.write(`
//     <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8" />
// 		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// 		<title>Document</title>
// 	</head>
// 	<body>
//     <h1>You Are Home </h1>
//     </body>
// </html>
//     `)
//     response.end();
//     } else if (request.url === '/about') {
//         response.write(`
//         <!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Document</title>
//         </head>
//         <body>
//         <h1>This is my HTML Peeps!! </h1>
//         </body>
//     </html>
//         `)
//         response.end();
//     } else {
//         response.statusCode = 404;
//         response.write(`
//         <!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Document</title>
//         </head>
//         <body>
//         <h1>Page Not Found!</h1>
//         </body>
//     </html>
//         `)
//         response.end();
//     }
});








server.listen(3000, () => {
    console.log('Listening on port 3000');
});