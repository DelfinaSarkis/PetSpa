import { Router, Request, Response } from "express";

interface IRecurso {
    id: string;
    nombre: string;
}

const router = Router();