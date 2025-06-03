import { Request, Response } from "express";
import { CreateFirmaDigitalUseCase } from "../../domain/use-cases/firma-digital/create-firma-digital.usecase";
import { CreateFirmaDigitalDto } from "../../domain/dtos/firma-digital.dto";

export class FirmaDigitalController {
  constructor(private readonly createUseCase: CreateFirmaDigitalUseCase) {}

  async create(req: Request, res: Response) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Cuerpo de la solicitud vacío" });
      }

      const firma = await this.createUseCase.execute(req.body as CreateFirmaDigitalDto);
      res.status(201).json(firma);
    } catch (error: unknown) { 
      if (error instanceof Error) {
        if (error.message.includes("validation")) {
          return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ 
          error: "Error al crear firma digital",
          details: error.message 
        });
      }
      res.status(500).json({ 
        error: "Error inesperado al crear firma digital" 
      });
    }
  }

  //im...
}