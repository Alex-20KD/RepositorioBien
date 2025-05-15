import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DocumentoAdopcion } from "./DocumentoAdopcion";

@Entity()
export class FirmaDigital {
  @PrimaryGeneratedColumn("increment")
  id_firma_digital!: number;

  @Column({ length: 100 })
  firmado_por!: string;

  @Column("text")
  certificado_digital!: string;

  @Column({ type: "timestamp" })
  fecha_firma!: Date;

  @Column({ length: 50 })
  algoritmo_firma!: string;

  @OneToMany(() => DocumentoAdopcion, doc => doc.firmaDigital)
  documentos!: DocumentoAdopcion[];
}
