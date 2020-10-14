import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import errorhandler from './errors/handler'
import routes from './routes'
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorhandler);


app.listen(3333);

//localhost:3333


//rota = conjunto
//recurso = usuario
//metodos HTTP = get, post, put, delete
//parametros

//GET: buscando informação (Listar item)
//POST: criando informação nova
//PUT: Editando uma informação
//DELETE: Deletando uma informação

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/

//Driver Nativo:
//Query builder:
//ORM(Object relational mapping): relação direta de tabela com objeto