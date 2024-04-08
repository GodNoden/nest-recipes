import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe as RecipeModel } from '@prisma/client';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) { }

  @Post('/new')
  create(@Body() postData: { title: string, ingredients: string[], preparation: string[], calories?: number, picture?: string; },): Promise<RecipeModel> {
    const { title, ingredients, preparation, calories, picture } = postData;
    return this.recipesService.createRecipe({
      title,
      ingredients,
      preparation,
      calories,
      picture
    });
  }

  @Get('/all')
  findAll() {
    return this.recipesService.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  }

  @Get('/')
  async findSeven(): Promise<RecipeModel[]> {
    const recipes = await this.recipesService.findMany({});
    const randomRecipes = recipes.sort(() => Math.random() - 0.5).slice(0, 7);
    return randomRecipes;
  }
}
