// src/infrastructure/datasource/mongoose/firma-digital.model.ts
import { Schema, model } from "mongoose";
import { FirmaDigital } from "../../../domain/entities/firma-digital.entity";

const FirmaDigitalSchema = new Schema<FirmaDigital>({
  firmado_por: { type: String, required: true, maxlength: 100 },
  certificado_digital: { type: String, required: true },
  fecha_firma: { type: Date, required: true },
  algoritmo_firma: { type: String, required: true, maxlength: 50 },
}, {
  timestamps: false,
  versionKey: false,
  toJSON: {
    transform: function(doc, ret) {
      ret.id_firma_digital = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  },
  toObject: {
    transform: function(doc, ret) {
      ret.id_firma_digital = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  }
});

export const FirmaDigitalModel = model<FirmaDigital>(
  "FirmaDigital", 
  FirmaDigitalSchema
);