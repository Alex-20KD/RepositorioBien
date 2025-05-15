import { AppDataSource } from "../data-source";
import { VerificacionLegal } from "../entity/VerificacionLegal";

export async function crearVerificacionLegal(data: Partial<VerificacionLegal>) {
  const repo = AppDataSource.getRepository(VerificacionLegal);
  const nueva = repo.create(data);
  return await repo.save(nueva);
}

export async function obtenerVerificacionesLegales() {
  const repo = AppDataSource.getRepository(VerificacionLegal);
  return await repo.find({ relations: ["documento"] });
}

export async function obtenerVerificacionLegalPorId(id: number) {
  const repo = AppDataSource.getRepository(VerificacionLegal);
  return await repo.findOne({ where: { id_verificacion: id }, relations: ["documento"] });
}

export async function actualizarVerificacionLegal(id: number, data: Partial<VerificacionLegal>) {
  const repo = AppDataSource.getRepository(VerificacionLegal);
  await repo.update(id, data);
  return await repo.findOne({ where: { id_verificacion: id } });
}

export async function eliminarVerificacionLegal(id: number) {
  const repo = AppDataSource.getRepository(VerificacionLegal);
  return await repo.delete(id);
}
