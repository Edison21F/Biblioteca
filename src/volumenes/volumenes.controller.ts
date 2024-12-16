// volumenes/volumenes.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VolumenesService } from './volumenes.service';
import { CreateVolumenDto } from './dto/create-volumen.dto';
import { UpdateVolumenDto } from './dto/update-volumen.dto';

@Controller('volumenes')
export class VolumenesController {
  constructor(private readonly volumenesService: VolumenesService) {}

  @Post()
  create(@Body() createVolumenDto: CreateVolumenDto) {
    return this.volumenesService.create(createVolumenDto);
  }

  @Get()
  findAll() {
    return this.volumenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volumenesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVolumenDto: UpdateVolumenDto) {
    return this.volumenesService.update(id, updateVolumenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volumenesService.remove(id);
  }
}
