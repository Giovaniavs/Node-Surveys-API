import { Router } from 'express';
import  SurveysController  from './controllers/SurveysController';
import  UserController from './controllers/UserController'

const router = Router();

router.post("/users", UserController.create);

router.post("/surveys", SurveysController.create);
router.get("/surveys", SurveysController.listAllSurveys);


export { router };