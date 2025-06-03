export interface CreateFirmaDigitalDto {
    firmado_por: string;
    certificado_digital: string;
    fecha_firma: Date;
    algoritmo_firma: string;
  }
  
  export interface UpdateFirmaDigitalDto {
    firmado_por?: string;
    certificado_digital?: string;
    fecha_firma?: Date;
    algoritmo_firma?: string;
  }