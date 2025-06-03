import { FirmaDigitalRepository } from "../../repositories/firma-digital.repository";
import { CreateFirmaDigitalDto } from "../../dtos/firma-digital.dto";
import { FirmaDigital } from "../../entities/firma-digital.entity";

export class CreateFirmaDigitalUseCase {
  constructor(private readonly repository: FirmaDigitalRepository) {}

  async execute(firma: CreateFirmaDigitalDto): Promise<FirmaDigital> {
    return this.repository.create(firma);
  }
}