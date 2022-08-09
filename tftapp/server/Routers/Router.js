import { Router } from "express";
import cors from "cors";
import { riotApiRequest, startServer } from "../controllers/profileInfo.controller.js";
import { errorInfoController } from "../controllers/errorInfo.controller.js";


const router = new Router();

const corsOptions = {
    header: "Access-Control-Allow-Origin: *",
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.get('/', startServer);
router.get('/profile/:name/:server', cors(corsOptions) , riotApiRequest);
router.post('/profile/iconerrors', cors(corsOptions), errorInfoController);

export default router;