var express = require('express')
var aplicacion = express()
var ipdinamic
const net = require('net') 
const os = require('os')
var interface = os.networkInterfaces()
const server = require('http').Server(aplicacion) // Es lo que instalamos, y va a funcionar como servidor
const socket = require('socket.io')(server)

// for(var k in interface){
//     for(var k2 in interface[k]){

//         var address=interface[k][k2];
//         if(address.family=="IPv4", !address.internal){
//             ipdinamic =address.address.toString();
            
//             console.log(ipdinamic)
            
//         }
//     }
// }

var HOST = "alfredosolis173239.ddns.net"
var PORT = "5003"


var ser = net.createServer(function(so){
    so.on('data', function(data){
        console.log('Usuario Nuevo')
        so.write("servidor1")
    })

    so.on('data', function(data){
  
       
         console.log(data.toString('utf-8'))

        
    })

    so.on('close', function(){
        console.log('Usuario Desconectado')
    })


});//Este va a crear nuestro servidor interno

ser.listen(PORT, HOST);



