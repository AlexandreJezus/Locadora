import { Router } from "express";
import { store, index } from "../controllers/movie-controller.js";
import jwtauthenticator from "../middleware/jwt-authenticator.js";

const router = Router();

router.post("/", jwtauthenticator, store); // rota privada
router.get("/", index); // rota publica

export default router;
