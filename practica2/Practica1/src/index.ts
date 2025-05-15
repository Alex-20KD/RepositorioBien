import "reflect-metadata";
import { AppDataSource } from "./data-source";

import * as documentoOps from "./operations/documentoAdopcionOps";
import * as licenciaOps from "./operations/licenciaOps";
import * as antecedentesOps from "./operations/antecedentesOps";
import * as firmaOps from "./operations/firmaDigitalOps";
import * as verificacionOps from "./operations/verificacionLegalOps";

import { LicenciaPermiso } from "./entity/LicenciaPermiso";
import { Antecedentes } from "./entity/Antecedentes";
import { FirmaDigital } from "./entity/FirmaDigital";

AppDataSource.initialize()
  .then(async () => {
    console.log("📦 Conexión a la base de datos establecida con éxito");

    // Obtener relaciones existentes
    const licencia = await AppDataSource.getRepository(LicenciaPermiso).findOneBy({ id_licencia_permiso: 1 });
    const antecedentes = await AppDataSource.getRepository(Antecedentes).findOneBy({ id_antecedentes: 1 });
    const firmaDigital = await AppDataSource.getRepository(FirmaDigital).findOneBy({ id_firma_digital: 1 });

    if (!licencia || !antecedentes || !firmaDigital) {
      throw new Error("❌ No se encontraron todas las relaciones necesarias para crear el documento.");
    }

    const nuevoDocumento = await documentoOps.crearDocumentoAdopcion({
      fecha_emision: "2025-05-16",
      estado_documento: "Activo",
      id_mascota: 1,
      licenciaPermiso: licencia,
      antecedentes: antecedentes,
      firmaDigital: firmaDigital
    });

    console.log("📄 Documento creado:", nuevoDocumento);

    const nuevaLicencia = await licenciaOps.crearLicencia({
      tipo_permiso: "Rescate animal",
      numero_licencia: "LIC-2025-001",
      fecha_emision: "2025-05-01",
      fecha_vencimiento: "2026-05-01",
      autoridad_emisora: "Ministerio de Adopciones"
    });
    console.log("✅ Licencia creada:", nuevaLicencia);

    const nuevosAntecedentes = await antecedentesOps.crearAntecedentes({
      persona_id: 1234,
      registro_policia: false,
      registro_animal_abuso: false,
      comentarios: "Sin antecedentes relevantes.",
      fecha_verificacion: "2025-05-10"
    });
    console.log("📁 Antecedente creado:", nuevosAntecedentes);

    const nuevaFirma = await firmaOps.crearFirmaDigital({
      firmado_por: "Dra. María López",
      certificado_digital: "certificado_base64",
      fecha_firma: new Date(),
      algoritmo_firma: "SHA256"
    });
    console.log("✍️ Firma digital creada:", nuevaFirma);

    const nuevaVerificacion = await verificacionOps.crearVerificacionLegal({
      documento: nuevoDocumento,
      verificador: "Inspector Carlos Ruiz",
      fecha_verificacion: "2025-05-13",
      resultado: "Aprobado",
      comentarios: "Cumple con todos los requisitos.",
      firma_verificador: "CarlosR123"
    });
    console.log("🔍 Verificación legal creada:", nuevaVerificacion);

  })
  .catch((error: unknown) => console.error("❌ Error al iniciar la fuente de datos:", error));

