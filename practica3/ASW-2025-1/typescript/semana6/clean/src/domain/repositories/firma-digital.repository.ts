import { FirmaDigital } from "../entities/firma-digital.entity";
import { CreateFirmaDigitalDto, UpdateFirmaDigitalDto } from "../dtos/firma-digital.dto";

export interface FirmaDigitalRepository {
  create(firma: CreateFirmaDigitalDto): Promise<FirmaDigital>;
  findAll(): Promise<FirmaDigital[]>;
  findById(id: number): Promise<FirmaDigital | null>;
  update(id: number, changes: UpdateFirmaDigitalDto): Promise<FirmaDigital>;
  delete(id: number): Promise<boolean>;
}