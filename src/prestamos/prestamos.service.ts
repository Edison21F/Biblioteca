// prestamos/prestamos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prestamo } from './interfaces/prestamo.interface';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Injectable()
export class PrestamosService {
  constructor(@InjectModel('Prestamo') private readonly prestamoModel: Model<Prestamo>) {}

  async create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
    const newPrestamo = new this.prestamoModel(createPrestamoDto);
    return newPrestamo.save();
  }

  async findAll(): Promise<Prestamo[]> {
    return this.prestamoModel
      .find({ activo: true })
      .populate('volumen')
      .populate('persona')
      .exec();
  }

  async findOne(id: string): Promise<Prestamo> {
    const prestamo = await this.prestamoModel
      .findById(id)
      .populate('volumen')
      .populate('persona')
      .exec();
    if (!prestamo || !prestamo.activo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }
    return prestamo;
  }

  async update(id: string, updatePrestamoDto: UpdatePrestamoDto): Promise<Prestamo> {
    const updatedPrestamo = await this.prestamoModel.findByIdAndUpdate(
      id,
      updatePrestamoDto,
      { new: true },
    );
    if (!updatedPrestamo || !updatedPrestamo.activo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }
    return updatedPrestamo;
  }

  async remove(id: string): Promise<Prestamo> {
    const prestamo = await this.prestamoModel.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true },
    );
    if (!prestamo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }
    return prestamo;
  }
}
