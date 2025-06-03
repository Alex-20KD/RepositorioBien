import { DataSource } from "typeorm";
import { FirmaDigital } from "../../../domain/entities/firma-digital.entity";
import { FirmaDigitalTypeORM } from "./firma-digital.entity";
import { CreateFirmaDigitalDto, UpdateFirmaDigitalDto } from "../../../domain/dtos/firma-digital.dto";

export class FirmaDigitalTypeORMDataSource {
  constructor(private readonly connection: DataSource) {}

  async create(firma: CreateFirmaDigitalDto): Promise<FirmaDigital> {
    const repo = this.connection.getRepository(FirmaDigitalTypeORM);
    const newFirma = repo.create(firma);
    return await repo.save(newFirma);
  }

  async findAll(): Promise<FirmaDigital[]> {
    const repo = this.connection.getRepository(FirmaDigitalTypeORM);
    return await repo.find();
  }

  async findById(id: number): Promise<FirmaDigital | null> {
    const repo = this.connection.getRepository(FirmaDigitalTypeORM);
    return await repo.findOneBy({ id_firma_digital: id });
  }

  async update(id: number, changes: UpdateFirmaDigitalDto): Promise<FirmaDigital> {
    const repo = this.connection.getRepository(FirmaDigitalTypeORM);
    await repo.update(id, changes);
    return await repo.findOneBy({ id_firma_digital: id }) as FirmaDigital;
  }

  async delete(id: number): Promise<boolean> {
    const repo = this.connection.getRepository(FirmaDigitalTypeORM);
    const result = await repo.delete(id);
    return result.affected !== 0;
  }
}