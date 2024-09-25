import { Router } from "express";
import { store, index } from "../controllers/movie-controller.js";
import jwtauthenticator from "../middleware/jwt-authenticator.js";

const router = Router();

router.post("/" /* Cadastrar um filme no catalogo*/);
router.get("/" /* Ver os filmes do catalogo*/);

export default router;
