import { AppDataSource } from "../data-source";
import { FirmaDigital } from "../entity/FirmaDigital";

export async function crearFirmaDigital(data: Partial<FirmaDigital>) {
  const repo = AppDataSource.getRepository(FirmaDigital);
  const nuevo = repo.create(data);
  return await repo.save(nuevo);
}

export async function obtenerFirmasDigitales() {
  const repo = AppDataSource.getRepository(FirmaDigital);
  return await repo.find();
}

export async function obtenerFirmaDigitalPorId(id_firma_digital: number) {
    const repo = AppDataSource.getRepository(FirmaDigital);
    return await repo.findOneBy({ id_firma_digital });
}

export async function actualizarFirmaDigital(id_firma_digital: number, data: Partial<FirmaDigital>) {
  const repo = AppDataSource.getRepository(FirmaDigital);
  await repo.update(id_firma_digital, data);
  return await repo.findOneBy({ id_firma_digital });
}

export async function eliminarFirmaDigital(id_firma_digital: number) {
  const repo = AppDataSource.getRepository(FirmaDigital);
  return await repo.delete(id_firma_digital);
}
