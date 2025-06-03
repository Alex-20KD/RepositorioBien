export interface FirmaDigital {
    id_firma_digital?: number;
    firmado_por: string;
    certificado_digital: string;
    fecha_firma: Date;
    algoritmo_firma: string;
  }