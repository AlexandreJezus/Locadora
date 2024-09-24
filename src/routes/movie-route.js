import { Router } from "express";
import { store, index } from "../controllers/movie-controller.js";

const router = Router();

router.post("/" /* Cadastrar um filme no catalogo*/);
router.get("/" /* Ver os filmes do catalogo*/);

export default Router;
