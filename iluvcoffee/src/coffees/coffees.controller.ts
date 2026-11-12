import { Controller, Get, Param, Body, Post, Patch, Delete, Put, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service.js';
import { CreateCoffeesDto } from './dto/create-coffees.dto.js';
import { UpdateCoffeeDto } from './dto/update-coffee.dto.js';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}


    @Get()
    findAll(@Query() query: any) {
        const { limit, offset } = query;
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeeService.findOne(Number(id));
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeesDto) {
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(Number(id), updateCoffeeDto);
    }

    @Put()
    updateAll() {
        return this.coffeeService.updateAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(Number(id));
    }
}
