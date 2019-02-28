var express = require('express')
var aplicacion = express()
var ipdinamic
const net = require('net') 
const os = require('os')
var interface = os.networkInterfaces()
const server = require('http').Server(aplicacion) // Es lo que instalamos, y va a funcionar como servidor
const socket = require('socket.io')(server)



var HOST = "alfredosolis173239.ddns.net"
var PORT = "5001"


var ser = net.createServer(function(so){
    so.on('data', function(data){
        var date = new Date();
        console.log('Usuario Nuevo')
        console.log(data.toString('utf-8')+date.toDateString())
        
    })

    so.on('data', function(data){
  
        so.write("servidor1")
         console.log(data.toString('utf-8'))

        
    })

    so.on('close', function(){
        console.log('Usuario Desconectado')
    })


});//Este va a crear nuestro servidor interno

ser.listen(PORT, HOST);



