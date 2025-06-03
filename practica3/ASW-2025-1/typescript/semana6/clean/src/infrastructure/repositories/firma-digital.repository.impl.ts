import { FirmaDigitalRepository } from "../../domain/repositories/firma-digital.repository";
import { FirmaDigital } from "../../domain/entities/firma-digital.entity";
import { CreateFirmaDigitalDto, UpdateFirmaDigitalDto } from "../../domain/dtos/firma-digital.dto";
import { FirmaDigitalTypeORMDataSource } from "../datasource/typeorm/firma-digital.typeorm.datasource";

export class FirmaDigitalRepositoryImpl implements FirmaDigitalRepository {
  constructor(private readonly dataSource: FirmaDigitalTypeORMDataSource) {}

  async create(firma: CreateFirmaDigitalDto): Promise<FirmaDigital> {
    return this.dataSource.create(firma);
  }

  async findAll(): Promise<FirmaDigital[]> {
    return this.dataSource.findAll();
  }

  async findById(id: number): Promise<FirmaDigital | null> {
    // Implementación usando el dataSource
    // Necesitarás agregar este método en FirmaDigitalTypeORMDataSource
    return this.dataSource.findById(id);
  }

  async update(id: number, changes: UpdateFirmaDigitalDto): Promise<FirmaDigital> {
    // Implementación usando el dataSource
    // Necesitarás agregar este método en FirmaDigitalTypeORMDataSource
    return this.dataSource.update(id, changes);
  }

  async delete(id: number): Promise<boolean> {
    // Implementación usando el dataSource
    // Necesitarás agregar este método en FirmaDigitalTypeORMDataSource
    return this.dataSource.delete(id);
  }
}