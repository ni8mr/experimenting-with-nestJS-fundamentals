import { Controller, Get, Param, Body, Post, Patch, Delete, Put, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service.js';

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
    create(@Body() body: any) {
        return this.coffeeService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return this.coffeeService.update(Number(id), body);
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
