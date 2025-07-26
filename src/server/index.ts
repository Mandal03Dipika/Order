import express, {Express, Request, Response} from "express";
import { env } from "../config/env.config";

export const app:Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "it's working"
    })
});

export default function loadServer() {
    app.listen(env.PORT, () => {
        console.log(`server running at ${env.PORT}`);
        
    })
}