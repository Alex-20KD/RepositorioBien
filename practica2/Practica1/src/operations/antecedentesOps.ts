import { AppDataSource } from "../data-source";
import { Antecedentes } from "../entity/Antecedentes";

export async function crearAntecedentes(data: Partial<Antecedentes>) {
  const repo = AppDataSource.getRepository(Antecedentes);
  const nuevo = repo.create(data);
  return await repo.save(nuevo);
}

export async function obtenerAntecedentes() {
  const repo = AppDataSource.getRepository(Antecedentes);
  return await repo.find();
}

export async function obtenerAntecedentePorId(id_antecedentes: number) {
  const repo = AppDataSource.getRepository(Antecedentes);
  return await repo.findOneBy({ id_antecedentes });
}

export async function actualizarAntecedente(id_antecedentes: number, data: Partial<Antecedentes>) {
  const repo = AppDataSource.getRepository(Antecedentes);
  await repo.update(id_antecedentes, data);
  return await repo.findOneBy({ id_antecedentes });
}

export async function eliminarAntecedente(id_antecedentes: number) {
  const repo = AppDataSource.getRepository(Antecedentes);
  return await repo.delete(id_antecedentes);
}
