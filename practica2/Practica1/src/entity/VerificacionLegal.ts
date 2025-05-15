import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DocumentoAdopcion } from "./DocumentoAdopcion";

@Entity()
export class VerificacionLegal {
  @PrimaryGeneratedColumn("increment")
  id_verificacion!: number;

  @ManyToOne(() => DocumentoAdopcion, doc => doc.verificaciones)
  documento!: DocumentoAdopcion;

  @Column({ length: 100 })
  verificador!: string;

  @Column({ type: "date" })
  fecha_verificacion!: string;

  @Column({ length: 50 })
  resultado!: string;

  @Column("text")
  comentarios!: string;

  @Column({ length: 100 })
  firma_verificador!: string;
}
