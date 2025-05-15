import { DataSource } from "typeorm";
import { DocumentoAdopcion } from "./entity/DocumentoAdopcion";
import { LicenciaPermiso } from "./entity/LicenciaPermiso";
import { Antecedentes } from "./entity/Antecedentes";
import { FirmaDigital } from "./entity/FirmaDigital";
import { VerificacionLegal } from "./entity/VerificacionLegal";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "Base_legalizacion",
  synchronize: true,
  logging: false,
  entities: [
    DocumentoAdopcion,
    LicenciaPermiso,
    Antecedentes,
    FirmaDigital,
    VerificacionLegal
  ],
  migrations: [],
  subscribers: [],
});
