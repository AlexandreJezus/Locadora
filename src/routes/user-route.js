import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";
import jwtAuthenticator from "../middleware/jwt-authenticator.js";
const router = Router();

/*
       CRUD Usuário
*/

router.post("/signup" /*Criar uma conta de usuário*/);
router.post("/login" /* Cria um token para o usuário*/);

export default router;
