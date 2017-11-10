'use strict';

let http = require('http');

http.createServer((request, response) => {
   let fs = require('fs');
    let postData = ' ';
    
    
    
    request.on('data',(chunk)=> {
    postData += chunk;

console.log(
        '接收的POST data片段 k:[' + chunk+ '].'
         );
    });
    
       request.on{'end',()=>{
        switch (request.url){
    case'/':
                fs.readFile('../htdocs/index.html',(err,data)=>{
           if(err){
           console.log('檔案讀取錯誤');
           }
                else{    
    response.writeHead(200, {
        'Content-Type': 'texe/html'
});
                    
response.write(data);
                    response.end();
                }
                });
                
                break;
                
            case '/assets/css/styles.css':
                fs.readFile('../htdocs/assets/css/styles.css',(err,data)=>{
                if (err){
                    console.log('檔案讀取錯誤');
                }
                    else{
                        response.writeHead(200,{
                            'Content-Type':'text/css'
                        });
                        
                        response.write(data);
                        response.end();
                    }
                });
                
                break;
                    
            case '/assets/png/SokobanClone_byVellidragon.png':
                       fs.readFile(    
                       '../htdocs/assets/png/SokobanClone_byVellidragon.png',
                           (err,data)=>{
                               if(err){
                                   console.log('檔案讀取錯誤');
                               }
                               else{
                                   response.write(data);
                                   response.end();
                               }
                           }
                           );
                
                break;
                
                default;
                console.log('為定義的存取:' + request.url);
                
                response.end();
                
                break;
                           }
// log message to Console
console.log('Server running at http://127.0.0.1:8088/');
// index.js
