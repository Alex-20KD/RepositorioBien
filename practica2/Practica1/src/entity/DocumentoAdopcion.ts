import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from "typeorm";
  import { LicenciaPermiso } from "./LicenciaPermiso";
  import { Antecedentes } from "./Antecedentes";
  import { FirmaDigital } from "./FirmaDigital";
  import { VerificacionLegal } from "./VerificacionLegal";
  
  @Entity()
  export class DocumentoAdopcion {
    @PrimaryGeneratedColumn("increment")
    id_documento!: number;
  
    @ManyToOne(() => LicenciaPermiso, licencia => licencia.documentos)
    licenciaPermiso!: LicenciaPermiso;
  
    @ManyToOne(() => Antecedentes, antecedentes => antecedentes.documentos)
    antecedentes!: Antecedentes;
  
    @ManyToOne(() => FirmaDigital, firma => firma.documentos)
    firmaDigital!: FirmaDigital;
  
    @Column({ type: "date" })
    fecha_emision!: string;
  
    @Column({ length: 50 })
    estado_documento!: string;
  
    @Column()
    id_mascota!: number;
  
    @OneToMany(() => VerificacionLegal, v => v.documento)
    verificaciones!: VerificacionLegal[];
  }
  