import { AppDataSource } from "../data-source";
import { LicenciaPermiso } from "../entity/LicenciaPermiso";

export async function crearLicencia(data: Partial<LicenciaPermiso>) {
  const repo = AppDataSource.getRepository(LicenciaPermiso);
  const nuevo = repo.create(data);
  return await repo.save(nuevo);
}

export async function obtenerLicencias() {
  const repo = AppDataSource.getRepository(LicenciaPermiso);
  return await repo.find();
}

export async function obtenerLicenciaPorId(id_licencia_permiso: number) {
  const repo = AppDataSource.getRepository(LicenciaPermiso);
  return await repo.findOneBy({ id_licencia_permiso });
}

export async function actualizarLicencia(id_licencia_permiso: number, data: Partial<LicenciaPermiso>) {
  const repo = AppDataSource.getRepository(LicenciaPermiso);
  await repo.update(id_licencia_permiso, data);
  return await repo.findOneBy({ id_licencia_permiso });
}

export async function eliminarLicencia(id_licencia_permiso: number) {
  const repo = AppDataSource.getRepository(LicenciaPermiso);
  return await repo.delete(id_licencia_permiso);
}
