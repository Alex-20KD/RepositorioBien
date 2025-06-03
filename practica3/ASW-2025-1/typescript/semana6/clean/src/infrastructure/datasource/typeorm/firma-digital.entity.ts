import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FirmaDigital } from "../../../domain/entities/firma-digital.entity";

@Entity("firma_digital")
export class FirmaDigitalTypeORM implements FirmaDigital {
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
}