import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DocumentoAdopcion } from "./DocumentoAdopcion";

@Entity()
export class Antecedentes {
  @PrimaryGeneratedColumn("increment")
  id_antecedentes!: number;

  @Column()
  persona_id!: number;

  @Column()
  registro_policia!: boolean;

  @Column()
  registro_animal_abuso!: boolean;

  @Column("text")
  comentarios!: string;

  @Column({ type: "date" })
  fecha_verificacion!: string;

  @OneToMany(() => DocumentoAdopcion, doc => doc.antecedentes)
  documentos!: DocumentoAdopcion[];
}
