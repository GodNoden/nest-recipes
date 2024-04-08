import { Injectable } from '@nestjs/common';
import { Prisma, Recipe as RecipeModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) { };

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<RecipeModel> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RecipeWhereUniqueInput;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput;
  }): Promise<RecipeModel[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.recipe.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

}
