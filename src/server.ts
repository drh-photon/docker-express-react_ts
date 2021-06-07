//Dependencies
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
const app: Application = express();

const func = require('./simple/func');


//Middleware1
//Static public folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => res.send("number is: " + func(2, 3)));
app.get('/api/customers', (req: Request, res: Response, next: NextFunction) => {
    const customers: Object = [
        { id: 1, first: 'john', last: 'doe' },
        { id: 2, first: 'jane', last: 'doe' },
        { id: 3, first: 'bob', last: 'jones' }
    ];
    // console.log(customers)
     res.send(customers);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});