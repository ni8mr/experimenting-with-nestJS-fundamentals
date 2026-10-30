import { Controller, Get, Param, Body, Post, Patch, Delete, Put } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll() {
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns the coffee with ID: ${id}`;
    }

    @Post()
    create(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any) {
        return `This action updates the coffee with ID: ${id}`;
    }

    @Put()
    updateAll() {
        return 'This action updates all coffees';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes the coffee with ID: ${id}`;
    }
}
