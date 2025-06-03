import { FirmaDigitalRepository } from "../../repositories/firma-digital.repository";
import { UpdateFirmaDigitalDto } from "../../dtos/firma-digital.dto";
import { FirmaDigital } from "../../entities/firma-digital.entity";
           //UpdateFirmaDigitalDto
export class UpdateFirmaDigitalUseCase {
  constructor(private readonly repository: FirmaDigitalRepository) {}

  async execute(id: number, changes: UpdateFirmaDigitalDto): Promise<FirmaDigital> {
    // Primero verificamos que la firma exista
    const existingFirma = await this.repository.findById(id);
    
    if (!existingFirma) {
      throw new Error("Firma digital no encontrada");
    }

    // Validaciones adicionales pueden ir aquí
    this.validateUpdateData(changes);

    // Actualizamos la firma
    return this.repository.update(id, changes);
  }

  private validateUpdateData(changes: UpdateFirmaDigitalDto): void {
    // Ejemplo de validación: el algoritmo de firma debe ser uno de los permitidos
    if (changes.algoritmo_firma) {
      const algoritmosPermitidos = ['RSA-SHA256', 'ECDSA-SHA256', 'Ed25519'];
      if (!algoritmosPermitidos.includes(changes.algoritmo_firma)) {
        throw new Error("Algoritmo de firma no soportado");
      }
    }

    // Puedes agregar más validaciones según tus requisitos
  }
}