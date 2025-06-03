import { FirmaDigital } from "../../../domain/entities/firma-digital.entity";
import { CreateFirmaDigitalDto, UpdateFirmaDigitalDto } from "../../../domain/dtos/firma-digital.dto";
import { FirmaDigitalModel } from "./firma-digital.model";

export class FirmaDigitalMongooseDataSource {
    async create(firma: CreateFirmaDigitalDto): Promise<FirmaDigital> {
      const newFirma = new FirmaDigitalModel(firma);
      const saved = await newFirma.save();
      return saved.toObject();
    }
  
    async findAll(): Promise<FirmaDigital[]> {
      return await FirmaDigitalModel.find().lean().exec();
    }
  
    async findById(id: number): Promise<FirmaDigital | null> {
      return await FirmaDigitalModel.findById(id).lean().exec();
    }
  
    async update(id: number, changes: UpdateFirmaDigitalDto): Promise<FirmaDigital> {
      const updated = await FirmaDigitalModel.findByIdAndUpdate(
        id, 
        changes, 
        { new: true, lean: true }
      ).exec();
      
      if (!updated) throw new Error("Firma no encontrada");
      return updated;
    }
  
    async delete(id: number): Promise<boolean> {
      const result = await FirmaDigitalModel.deleteOne({ _id: id }).exec();
      return result.deletedCount !== 0;
    }
  }