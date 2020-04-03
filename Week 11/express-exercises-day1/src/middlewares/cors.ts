const express = require('express');
import { Response } from "express"

const app = express();

app.use((req: any, res: Response, next: Function) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

export default cors;