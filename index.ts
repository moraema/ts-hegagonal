import express from 'express';
import cors from 'cors';
import UserRouter from './src/user/infrestructure/routes/user.Route';
import VentasRouter from './src/ventas/infrestructure/routes/ventas.router';



const app = express();
app.disable("x-powered-by");


const PORT = '3000';


let corsOptions = {
  origin: '*' // Direcion de mi pagina web
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/usuarios', UserRouter);
app.use('/ventas', VentasRouter);

app.listen(PORT, () => {
  console.log('Servidor escuchado en el puerto', PORT)
})
