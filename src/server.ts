import * as express from "express";
import { WebApi } from './application';

const port: number = process.env.PORT || 3000;
const api = new WebApi(express(), port);
api.run();

console.info(`API server listening on: ${port}`);




