

var express = require('express')
var aplicacion = express()


const net = require('net') //Se instalo
const server = require('http').Server(aplicacion) // Es lo que instalamos, y va a funcionar como servidor
const socket = require('socket.io')(server)
const {StringDecoder}= require('string_decoder')
const decoder = new StringDecoder('utf-8')

//Este serán las direcciones
var HOST = "alfredosolis.ddns.net"  //Este mi IP  de la red
var PORT = " 5001"  // es el puerto


var ser = net.createServer(function(so){
    so.on('data', function(data){
        console.log('Usuario Nuevo')
        var cent = data
        so.write("Conectado a servidor 1"+ "\n")
      console.log(decoder.write(cent));
    })

    so.on('data', function(data){
 

        
    })

    so.on('close', function(){
        console.log('Usuario Desconectado')
    })


});//Este va a crear nuestro servidor interno

ser.listen(PORT, HOST);

console.log('Conexion');

