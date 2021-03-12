const http = require('http')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const PORT = 3030;

const server = http.createServer((req, res)=>{
         let filePath = path.join(__dirname, '..', req.url === '/' ? 'index.html' : req.url)
         const ext = path.extname(filePath)
         let contentType = 'text/html'

         switch(ext){
                  case '.css':
                           contentType = 'text/css'
                           break;
                  case '.js':
                           contentType = 'text/javascript'
                           break;
                  case '.svg':
                           contentType = 'image/svg+xml'
                           break;
                  default:
                           contentType = 'text/html'
         }

         if (!ext){
                  filePath += '.html'
         }

         fs.readFile(filePath, (err, content)=>{
                  if(!err){
                           res.writeHead(200, {
                                    'Content-Type': contentType
                           })
                           res.end(content)
                  }else{
                           console.log(chalk.red(err))
                  }
         })
})

server.listen(PORT, ()=>{
         console.log(chalk.blue(`Server has been started on port: ${PORT}`))
         console.log(chalk.green(`\nUSE:\thttp://localhost:${PORT}/\n\t`))
})