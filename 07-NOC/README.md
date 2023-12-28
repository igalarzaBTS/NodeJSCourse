# NOC

Este proyecto registra logs en FileSystem, mongoDB y postgreSQL

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el comando ```npm install```
4. Levantar las bases de datos con el comando
   ```
   docker compose up -d
   ```
5. Ejecutar el comando
  ```
  npx prisma migrate dev
  ```
6. Ejecutar ```npm run dev```

# Test

Para ejecutar los tests usamos: ```npm run test:watch```


## Obtener Gmail Key
[Google AppPasswords](https://myaccount.google.com/u/0/apppasswords)

# Study
## cron

cron nos permite correr/ejecutar tareas programadas.
Link del  paquete cron: ```npm install cron```

## JSON Server
Este paquete nos permie crear prototipar y mockear una base de datos de forma rápida para inciar la etapa de desarrollo.
```npm i json-server```


## JSON methods


- ```JSON.stringify(newLog)``` -> Transforma un objeto en un json como string
-  ```JSON.parse(json)``` -> 


## dotenv and env-var

### dotenv
Este paquete nos permite definir nuestras variables de entorno en un archivo ".env".

<b>Web</b>
```https://www.npmjs.com/package/dotenv```

### env-var
Este paquete nos permite realizar validaciones sobre las variables de entorno definidas.

<b>Web</b>
```https://www.npmjs.com/package/env-var```


### implementación
```
import 'dotenv/config';
import * as env from 'env-var';


export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
  MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
  PROD: env.get('PROD').required().asBool(),
}


// Uso

 // console.log(envs.MAILER_EMAIL);

```

## Nodemailer
Nos permite enviar emails desde una cuenta como gmail.

```
iimport nodemailer from 'nodemailer';
import { envs } from '../../config/env.plugins';

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  filename: string;
  path: string
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth : {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY
    }
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {

    const {to, subject, htmlBody, attachments = []} = options;
    try {

      const sendInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments
      });

      console.log(sendInformation)

      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSysmtemLogs(to: string | string[]) {
    const subject = `Logs del servidor`
    const htmlBody = `
    <h3>Logs de sistema - NOC</h3>
    <p>Este es eun mensaje de pruebas</p>
    <p>Ver logs adjuntos</p>
    `

    const attachments: Attachment[] = [
      { filename: 'logs-all.log', path: `./logs/logs-all.log` }, 
      { filename: 'logs-medium.log', path: `./logs/logs-medium.log` }, 
      { filename: 'logs-high.log', path: `./logs/logs-high.log` }, 
    ]

    return this.sendEmail({
      to, subject, attachments, htmlBody
    });
  }


}
```

##### Uso

```
    // send basic email
    const emailService = new EmailService();
    emailService.sendEmail({
      to: 'cadakox153@avucon.com',
      subject: 'Logs de sistema',
      htmlBody: `
      <h3>Logs de sistema - NOC</h3>
      <p>Este es eun mensaje de pruebas</p>
      <p>Ver logs adjuntos</p>
      `
    })

    // Send email with attachments
    const emailService2 = new EmailService();
    emailService.sendEmailWithFileSysmtemLogs(
      ['cadakox153@avucon.com']
    );
```