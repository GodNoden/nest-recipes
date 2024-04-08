"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const recipe1 = await prisma.recipe.update({
        where: { id: 1 },
        data: {
            title: 'Crispy Fried Green Tomatoes with Crab Salad and Hot Butter Sauce',
            preparation: [
                '1: Prepare the following, adding each to the same medium bowl as you complete it: Pick over 8 ounces lump crab meat for any shells. Peel and mince 1/2 small shallot until you have 3 tablespoons. Very finely chop 1 medium stalk celery (about 1/3 cup). Trim and very finely chop 1/4 medium red bell pepper until you have 1/4 cup.',
                '2: Finely grate the zest of 1 medium lemon until you have 1 teaspoon. Halve the zested lemon and juice one half until you have 1 tablespoon. Add the zest and juice to the crab. Cut the remaining lemon lemon into wedges for serving.',
                '3: Pick the leaves from 5 fresh parsley sprigs and coarsely chop until you have 4 tablespoons. Place 3 tablespoons in the bowl with crab and reserve 1 tablespoon for garnish.',
                '4: Add 2 tablespoons mayonnaise and 1 tablespoon whole grain mustard to the bowl of crab. Stir until evenly combined. Cover the bowl with plastic wrap and refrigerate until ready to serve, up to 30 minutes.',
                'MAKE THE HOT BUTTER SAUCE:',
                '1: Heat 3 tablespoons unsalted butter and 1 tablespoon Tabasco hot sauce in a small saucepan over medium heat until the butter is melted; whisk to combine. (Alternatively, melt the butter in the microwave and whisk in the Tabasco.) Cover and keep warm while you prepare the tomatoes.',
                '2: Prepare the fried green tomatoes (skip making the remoulade sauce). Transfer to a serving platter in a single layer and drizzle with the butter sauce. Using a slotted spoon, transfer about 1 tablespoon of the crab salad onto each tomato slice, leaving any excess liquid in the bowl. Garnish with the parsley and serve with the lemon wedges.'
            ],
            calories: 120,
            ingredients: [
                '8 ounces lump crab meat',
                '1/2 small shallot',
                '1 medium stalk celery',
                '1/4 medium red bell pepper',
                '1 medium lemon',
                '5 sprigs fresh parsley',
                '2 tablespoons mayonnaise',
                '1 tablespoon whole grain mustard',
                '1 recipe fried green tomatoes',
            ],
            picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/k_Photo_Recipes_2022-08-Fried-Green-Tomatoes-with-Crab-Salad_220809_AptTherapyKitchn_FriedGreenTomatoCrabSalad_0152.jfif'
        },
    });
    const recipes = await prisma.recipe.createMany({
        data: [
            {
                title: 'Deli-Style Bell Pepper Sandwiches',
                preparation: [
                    '1: Place 2 tablespoons cream cheese in a small bowl and let sit at room temperature until softened slightly.',
                    '2: Trim the top and bottom from 2 medium bell peppers. Cut each bell pepper in half lengthwise, then remove the inner core, seeds, and pale ribs.',
                    '3: Add 2 teaspoons whole grain or Dijon mustard to the cream cheese and stir to combine. Divide the cream cheese mixture evenly onto the inside of 2 bell pepper halves and spread into an even layer.',
                    '4: Remove the pit from 1/2 ripe medium avocado and peel. Add to the now-empty bowl, add 1/8 teaspoon kosher salt, and mash with a fork to desired consistency. Divide evenly onto the inside of the remaining 2 bell pepper halves and spread into an even layer.',
                    '5: Divide and arrange 4 thin slices turkey or ham deli meat, 1/4 cup baby spinach leaves, and 1 slice Provolone cheese onto the cream cheese-bell pepper halves. Top with the avocado-bell pepper halves to close the sandwiches.'
                ],
                calories: 276,
                ingredients: [
                    '2 tablespoons cream cheese (1 ounce)',
                    '2 medium bell peppers',
                    '2 teaspoons whole grain or Dijon mustard',
                    '1/2 ripe medium avocado',
                    '1/8 teaspoon kosher salt',
                    '4 thin slices turkey or ham deli meat (about 1 1/2 ounces total)',
                    '1/4 cup baby spinach (about 1/4 ounce or 10 leaves)',
                    '1 slice Provolone cheese (about 3/4 ounce)',
                ],
                picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/sandwich.webp'
            },
            {
                title: 'Pulled Pork Pizza',
                preparation: [
                    '1: Heat oven to 450°F. Put pizza crust on pizza pan or large baking sheet. Lightly brush crust with about 1/4 cup of barbecue sauce. Scatter a generous 1/2 cup of pulled pork on top. Brush another 2 tablespoons of barbecue sauce over the meat. Sprinkle with about 1 cup of cheese. Bake until heated through and cheese melts, 8 to 10 minutes.',
                ],
                calories: 276,
                ingredients: [
                    '1 Prebaked thin pizza crust (we used Boboli Thin Crust)',
                    '5 tbsp. Barbecue sauce (condiment aisle)',
                    '1/2 c. Heat-and-serve pulled pork (meat case',
                    '1 c. Shredded mozzarella and provolone cheese blend (dairy case',
                ],
                picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/pizza.jpg'
            }
        ],
    });
    console.log({ recipe1, recipes });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map