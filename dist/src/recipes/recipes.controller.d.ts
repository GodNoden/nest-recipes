import { RecipesService } from './recipes.service';
import { Recipe as RecipeModel } from '@prisma/client';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    create(postData: {
        title: string;
        ingredients: string[];
        preparation: string[];
        calories?: number;
        picture?: string;
    }): Promise<RecipeModel>;
    findAll(): Promise<{
        id: number;
        title: string;
        ingredients: string[];
        preparation: string[];
        calories: number;
        picture: string;
    }[]>;
    findSeven(): Promise<RecipeModel[]>;
}
