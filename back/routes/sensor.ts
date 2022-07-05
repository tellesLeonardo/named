import mqtt from 'mqtt'
import { myIp } from '../src/app'

import { json, Request, Response } from "express";

const client = mqtt.connect(`mqtt://${myIp}`)

const index = function (request: Request, response: Response) {


    let payload =
        JSON.stringify({
            home: 'PythonHouse',
            email: 'amanda99@ucl.br',
            cl2: { initials: 'CL2', name: 'Cloro', level: request.body.cl2 },
            no2: { initials: 'NO2', name: 'Dióxido de Nitrogênio', level: request.body.no2 },
            r22: { initials: 'R22', name: 'Clorodifluorometano', level: request.body.r22 },
            co2: { initials: 'CO2', name: 'Monóxido de Carbono', level: request.body.co2 },
            status: new Date().getTime()
        })

    console.log(payload)

    client.publish(
        'Sensor/Doku',
        payload
    )

    response.status(201).send("ok")

};

export { index };