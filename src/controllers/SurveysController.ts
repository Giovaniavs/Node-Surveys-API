import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description,
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey);
  }

  async listAllSurveys(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const listOfAllSurveys = await surveysRepository.find();

    return response.json(listOfAllSurveys)
  }
}

export default new SurveysController();