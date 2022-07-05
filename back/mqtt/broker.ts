import mosca from 'mosca';
import { myIp } from '../src/app';

const mqttPort = 1883

const server = new mosca.Server({
  port: mqttPort
})

server.on('ready', function () {
  console.log(`Servidor rodando em mqtt://${myIp}:${mqttPort}`)
})
