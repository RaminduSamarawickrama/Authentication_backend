import express, {NextFunction} from 'express';
import authRoutes, {authenticateToken} from "./routes/auth-routes";
import dotenv from 'dotenv';
import jwt, {Secret} from 'jsonwebtoken';

dotenv.config();
const app = express();

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use(express.json());

app.use('/auth', authRoutes);

app.use(authenticateToken);


app.get('/customers', async (req: express.Request, res: express.Response, next: NextFunction) => {
    const customer = {'id' : '1', 'name' : 'ramindu'}
    const username = req.body.username;
    res.json(customer);

})
app.listen(3003,()=>{
    console.log("Server running on port 3003");
})