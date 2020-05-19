import express from 'express';
import {helloWorld} from './routes';
//Adicionar o @types/express como dependencia de desenvolvimento.
//Configurado o arquivo tsconfig para que a conversão para JS fique na pasta dist.

const app = express()

app.get('/', helloWorld);



app.listen(3333);

