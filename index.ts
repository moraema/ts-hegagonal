import express from 'express';
import cors from 'cors';
import UserRouter from './src/user/infrestructure/routes/user.Route';
import VentasRouter from './src/ventas/infrestructure/routes/ventas.router';

const app = express();
const PORT = '3000';

app.use(cors());
app.use(express.json());

app.use('/', UserRouter);
app.use('/', VentasRouter);

app.listen(PORT, () => {
  console.log('Servidor escuchado en el puerto', PORT)
})