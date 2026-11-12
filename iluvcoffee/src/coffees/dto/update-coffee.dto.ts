import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeesDto } from "./create-coffees.dto.js";

export class UpdateCoffeeDto extends PartialType(CreateCoffeesDto) {}
