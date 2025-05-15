import { AppDataSource } from "../data-source";
import { DocumentoAdopcion } from "../entity/DocumentoAdopcion";

export async function crearDocumentoAdopcion(data: Partial<DocumentoAdopcion>) {
  const repo = AppDataSource.getRepository(DocumentoAdopcion);
  const nuevo = repo.create(data);
  return await repo.save(nuevo);
}

export async function obtenerDocumentosAdopcion() {
  const repo = AppDataSource.getRepository(DocumentoAdopcion);
  return await repo.find({ relations: ["verificaciones"] });
}

export async function obtenerDocumentoAdopcionPorid(id_documento: number) {
  const repo = AppDataSource.getRepository(DocumentoAdopcion);
  return await repo.findOne({ where: { id_documento }, relations: ["verificaciones"] });
}

export async function actualizarDocumentoAdopcion(id_documento: number, data: Partial<DocumentoAdopcion>) {
  const repo = AppDataSource.getRepository(DocumentoAdopcion);
  await repo.update(id_documento, data);
  return await repo.findOneBy({ id_documento });
}

export async function eliminarDocumentoAdopcion(id_documento: number) {
  const repo = AppDataSource.getRepository(DocumentoAdopcion);
  return await repo.delete(id_documento);
}
