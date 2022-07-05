import express from 'express';
import cors from 'cors';
import mqtt from 'mqtt'
import mosca from 'mosca';
import router from '../routes/routes';

export const myIp = '192.168.100.7';
const app = express();

app.use(express.json());
app.use(cors());
app.use(router)


app.listen(5201, () => {
    console.log("sim")
})

const mqttPort = 1883

const server = new mosca.Server({
    port: mqttPort
})

server.on('ready', function () {
    console.log(`Servidor rodando em mqtt://${myIp}:${mqttPort}`)
})


const client = mqtt.connect(`mqtt://${myIp}`)

client.on('connect', () => {
    client.subscribe('Alert/House')
})

client.on('message', function (topic, message) {
    console.log(topic)
    const context = message.toString()
    console.log(context)
})
