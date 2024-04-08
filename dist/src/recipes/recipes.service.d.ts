import { Prisma, Recipe as RecipeModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class RecipesService {
    private prisma;
    constructor(prisma: PrismaService);
    createRecipe(data: Prisma.RecipeCreateInput): Promise<RecipeModel>;
    findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RecipeWhereUniqueInput;
        where?: Prisma.RecipeWhereInput;
        orderBy?: Prisma.RecipeOrderByWithRelationInput;
    }): Promise<RecipeModel[]>;
}
