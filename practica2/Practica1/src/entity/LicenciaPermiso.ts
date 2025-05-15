import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DocumentoAdopcion } from "./DocumentoAdopcion";

@Entity()
export class LicenciaPermiso {
  @PrimaryGeneratedColumn("increment")
  id_licencia_permiso!: number;

  @Column({ length: 100 })
  tipo_permiso!: string;

  @Column({ length: 50 })
  numero_licencia!: string;

  @Column({ type: "date" })
  fecha_emision!: string;

  @Column({ type: "date" })
  fecha_vencimiento!: string;

  @Column({ length: 100 })
  autoridad_emisora!: string;

  @OneToMany(() => DocumentoAdopcion, doc => doc.licenciaPermiso)
  documentos!: DocumentoAdopcion[];
}
