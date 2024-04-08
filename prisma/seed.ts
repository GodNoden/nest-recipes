import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

  // const recipes = await prisma.recipe.createMany({
  //   data: [
  //     {
  //       title: 'Red Cooked Pork Redux',
  //       preparation: [
  //         '1: Put the pork belly in a wok containing enough boiling water to cover the meat completely. Continuously skim off the scum as it forms on top of the boiling water. Boil for about 20 minutes then drain the pork belly and place on a plate to cool. The boiling liquid can be reused for braising after filtering through a fine sieve. When the pork belly is cool to touch cut it into pieces of about 1.5 inches cubes.',
  //         '2: Melt the sugar and the vegetable oil in a wok over medium high heat. Continue heating until the sugar is slightly brown. About 3 minutes. Add the cubed pork belly and brown it with the caramelized sugar. About 8 minutes.',
  //         '3: Put the garlic, scallion, star anise, dark soy sauce, soy sauce, rice wine and clear stock into the pot. Cover the pot and simmer over low heat. Cook for about 90 minutes. Stir the meat every 10 minutes to make sure the pork at the bottom of the pot does not get burnt. Remove the cover and turn the heat to medium high. Cook the meat for another 10 minutes until the sauce reduces to a smooth consistency.',
  //         '4: You can serve this dish right away or keep overnight and reheat the next day before serving. Plate it in a shallow bowl and garnish with shredded scallion and sprigs of cilantro.'
  //       ],
  //       calories: 302,
  //       ingredients: [
  //         '1 1/2 lb. pork belly',
  //         '3 tablespoons vegetable oil',
  //         '2 tablespoons sugar',
  //         '3 cloves garlic peeled',
  //         '2 scallions cut into 2-inch long pieces',
  //         '3 star anise',
  //         '2 tablespoons dark soy sauce',
  //         '1 tablespoon soy sauce',
  //         '1/4 cup Shaoxing cooking wine (紹興料酒)',
  //         '1 1/2 cups pork stock or wate',
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/red-cooked-pork.jpg'
  //     },
  //     {
  //       title: 'Garlic-Butter Broccoli',
  //       preparation: [
  //         '1: Cook the broccoli in lightly salted boiling water until crisp-tender, 2 to 4 minutes. Drain.',
  //         '2: Add the butter and garlic to the saucepan and cook until the garlic is softened, 1 to 2 minutes.',
  //         '3: Toss with the salt and a few grinds of pepper.'
  //       ],
  //       calories: 83,
  //       ingredients: [
  //         '1 bunch broccoli (1 pound), cut into small pieces, stalks peeled and thinly sliced (about 6 cups)',
  //         '2 tablespoons unsalted butter',
  //         '1 clove garlic, minced',
  //         '¼ teaspoon kosher salt',
  //         'freshly ground black pepper',
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/brocolli-butter.webp'
  //     },
  //     {
  //       title: 'Lasagne Verdi al Forno (Baked Spinach Lasagne)',
  //       preparation: [
  //         '1: Set oven rack in top third of oven, then preheat oven to 450°. Grease a 9" × 12" baking dish with butter and set aside. Bring a large pot of water to a boil over high heat and add 2 generous pinches of salt. Cook 1 sheet of pasta at a time until it floats to the surface, about 10 seconds. Carefully remove with a slotted spoon and plunge into a large bowl of salted ice water to stop further cooking. Remove from water when cool. Lay sheets out, being careful not to let them touch, on clean, damp kitchen towels and cover with more damp towels.',
  //         '2: Line bottom of prepared baking dish with a layer of pasta, trimming sheets with a knife so that they fit in 1 even layer (patch if necessary). Spread evenly with about 1 cup of the meat sauce, then sprinkle lightly with some of the parmigiano. Add another layer of pasta, evenly spread 1 cup of the béchamel sauce on pasta, then sprinkle lightly with parmigiano. Repeat layers (you will have 3 layers of meat sauce and 2 of béchamel), ending with meat sauce and parmigiano. Reserve any extra meat sauce for another use.',
  //         '3: Bake lasagne for 10 minutes. Increase oven temperature to 500° and cook until lasagne is bubbling around the edges and browned on top, 5–7 minutes more. Do not overcook. Allow lasagne to rest for 8–10 minutes before serving.'
  //       ],
  //       calories: 253,
  //       ingredients: [
  //         '2 tbsp. butter',
  //         '4 (6" × 22") sheets Spinach Pasta',
  //         'Salt',
  //         '5 cups Bolognese Meat Sauce',
  //         '1 cup freshly grated parmigiano-reggiano',
  //         '2 cups Italian-Style Béchamel Sauce'
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/lasagne.webp'
  //     },
  //     {
  //       title: 'The Spotted Pig\'s Chargrilled Burger at Home Recipe',
  //       preparation: [
  //         '1: If Using A Meat Grinder: Place feed shaft, blade, and 3/8-inch grinding plate of meat grinder in freezer for at least 30 minutes before grinding. Combine well-chilled meat in large bowl and grind, passing through grinder twice, re-chilling grinder and meat in between grinds if necessary (i.e. if fat starts to smear).',
  //         '2: If Using A Food Processor: Spread meat on sheet tray and place in freezer until firm and just starting to freeze, but still malleable, about 15 minutes. Working in four batches, grind meat in 12-cup food processor, processing with 8-10 one-second pulses, redistributing meat between pulses as necessary. Transfer batches to large bowl and combine.',
  //         '3: Form meat into four patties, about 4 1/2 inches wide and 1 inch tall, making slight depression in center of each patty.',
  //         '4: Light large chimney starter filled with charcoal (5-6 quarts, about 100 briquettes), and burn until coals are coated in thin layer of gray ash, about 20 minutes. Empty coals and spread evenly over half of grates. Position grill grate on top of grill, cover grill, and heat until grate is hot, about 5 minutes. Scrub grill clean with grill brush if necessary. Season burger patties generously with salt and pepper on all sides. Place on hot side of grill and cook for 1 minute. Flip burgers and cook for 1 minute longer. Flip burgers again, adjusting as necessary to create cross-hatched grill pattern on first side. Cook for 1 minute longer. Flip once more, adjusting as necessary to create cross-hatched grill pattern on second side and cook for 1 minute longer. Transfer burgers to cool side of grill, cover, and cook until desired temperature is achieved, about 1 minute for rare (120°F on an instant read thermometer), or 2 1/2 minutes for medium (140°F on an instant read thermometer). Transfer burgers to cutting board, top each with 2 ounces Roquefort cheese, tent loosely with foil, and allow to rest 5 minutes.',
  //         '5: Meanwhile, cut buns in half. Toast cut sides on hot side of grill, pressing down gently, until golden-brown grill marks are formed, about 45 seconds to 1 minute. Transfer bun bottoms to cool side of grill to keep warm. Toast top sides of top buns over hot side of grilled, pressing buns into grill grates to form cross-hatched grill pattern about 1 minute total. Place burgers on bun bottoms, top with bun tops, and serve immediately.'
  //       ],
  //       calories: 813,
  //       ingredients: [
  //         '10 ounces well-marbled boneless short rib, cut into 1-inch pieces (or 8 ounces short rib and 2 ounces beef suet)',
  //         '10 ounces beef brisket, preferably second-cut, cut into 1-inch pieces',
  //         '12 ounces well-marbled chuck roast or chuck stew meat, cut into 1-inch pieces',
  //         'Kosher salt and freshly ground black pepper',
  //         '8 ounces Roquefort cheese, room temperature',
  //         '4 Burger Buns'
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/burger.webp'
  //     },
  //     {
  //       title: 'Crab and Avocado Quesadilla',
  //       preparation: [
  //         '1: In a serving bowl, combine 2/3rds of avocado, 2/3rds of cherry tomatoes, 1/2 of serrano, cilantro, shallots, and lime juice. Toss to combine and season with salt and pepper. Set aside.',
  //         '2: Combine remaining avocado, tomato, serrano, cheese, crab meat, and scallions in a medium bowl and toss to mix. Divide mixture evenly between tortillas, covering half of each tortilla and leaving a 1/2-inch gap around the edge. Fold tortillas to close quesadillas.',
  //         '3: Heat 1 of oil in 10-inch stainless steel skillet over medium heat until shimmering. Carefully add two folded tortillas to skillet and cook, shaking pan gently until first side is golden brown and puffed, 1 to 2 minutes. Carefully fip tortillas with a flexible slotted spatula, sprinkle with salt, and cook on second side until golden brown and puffed, 1 to 2 minutes longer. Transfer to a paper towel-lined plate and allow to rest while you repeat with the remaining oil and quesadillas. Allow cooked quesadillas to rest 1 minute after cooking for cheese to melt. Cut into wedges and serve with avocado salsa.'
  //       ],
  //       calories: 573,
  //       ingredients: [
  //         '3 ripe Hass avocados, cut in small chunks, divided',
  //         '1 pint Sun Gold or cherry tomatoes, halved, divided',
  //         '2 serrano peppers, thinly sliced, divided',
  //         '1/4 cup fresh cilantro leaves, roughly chopped',
  //         '1 medium shallot, thinly sliced',
  //         '4 teaspoons freshly squeezed lime juice from 2 limes',
  //         'Kosher salt and freshly ground black pepper',
  //         '1 1/2 cups shredded Monterey Jack cheese',
  //         '6 ounces picked crab meat',
  //         '2 tablespoons scallions, light green parts only',
  //         '4 (10-inch) corn tortillas',
  //         '2 tablespoons olive oil, divided',
  //         'Lime wedges, for serving',
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/quesadilla.webp'
  //     },
  //     {
  //       title: 'Pasta With 15-Minute Meat Sauce',
  //       preparation: [
  //         '1: Cook pasta in a large pot of boiling salted water, stirring occasionally, until al dente; drain and transfer to a large bowl.',
  //         '2: Meanwhile, process onion, celery, carrot, and garlic in a food processor until finely chopped.',
  //         '3: Heat oil in a large skillet over high. Add chopped vegetables, beef, and pork and cook, breaking up with a spatula, until meat is beginning to brown, about 3 minutes. Stir in tomato paste, oregano, ¾ tsp. salt, and ½ teaspoon pepper; cook, stirring occasionally, until heated through, about 1 minute. Add wine and cook, stirring constantly, until reduced by half, about 1 minute more. Stir in tomato sauce, reduce heat to medium, and simmer until sauce is slightly thickened, about 4 minutes.',
  //         '4: Remove from heat, then stir in butter. Toss meat sauce with pasta, top with Parmesan, and season with pepper.',
  //         'Do Ahead\n5: Let sauce cool, then chill in an airtight container for up to 3 days or freeze for up to 2 months'
  //       ],
  //       calories: 898,
  //       ingredients: [
  //         '1 pound pasta',
  //         'Kosher salt',
  //         '1 medium onion, peeled, quartered',
  //         '1 celery stalk, quartered',
  //         '1 small carrot, peeled, quartered',
  //         '2 garlic cloves, peeled',
  //         '2 tablespoons olive oil',
  //         '½ pound ground beef or vegetarian substitute',
  //         '2 tablespoons tomato paste',
  //         '1 teaspoon dried oregano',
  //         'Freshly ground black pepper',
  //         '¼ cup red wine',
  //         '1 (15-ounce) can tomato sauce',
  //         '2 tablespoons cold unsalted butter',
  //         'Freshly grated Parmesan (for serving)',
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/pastawithmeatsacue.webp'
  //     },
  //     {

  //       title: 'Steamed Meat Bao with Preserved Vegetables',
  //       preparation: [
  //         'Filling:',
  //         '1: Rinse preserved salted and sweet vegetables several times. Then soak them in a bowl of water for 45 minutes. Rinse and squeeze dry, chop to pieces.',
  //         '2: Heat wok with oil and fry the preserved salted and sweet vegetables for a while and add mince pork into and fry till meat separated. Add in all the seasoning and stir fry till meat is cooked. Lastly add toasted seseme seeds, stir well. Dish up and side aside for later use.',
  //         'Bao dough:',
  //         '1: Mix all bao dough ingredients together (as shown in the video) and knead to smooth, dust some flour if you find the dough sticky (I kneaded the dough for about 10 minutes). Cover and rest the dough for 5 minutes.',
  //         '2: Roll the dough into cylinder shape and cut into 15 pieces, about 35g each.',
  //         '3: Flatten each dough into a small flat disc with a rolling pin, make the edges thinner and centre portion thicker.',
  //         '4: Wrap the dough with filling, sprinkle with some toasted sesame seeds on top and place on a small square of parchment paper. Then place the dough bao into the steamer with water below (not boiled yet), cover and proof for 15 minutes.',
  //         '5: Bring water to boil and steam the buns for 12 minutes.',
  //         '6: Off heat, leave the lid slightly open for 3-5 minutes before removing the whole cover.'
  //       ],
  //       calories: 174,
  //       ingredients: [
  //         'Filling:',
  //         '60g Preserved (salty) vegetables',
  //         '50g Preserved (sweet) vegetables',
  //         '300–320g Minced pork',
  //         '1 tbsp Light soya sauce',
  //         '1/2 tbsp Sugar',
  //         '1/2 tbsp Cooking wine',
  //         'a dash of pepper',
  //         '1/2 tbsp Corn flour',
  //         '2 tbsp Cooking oil',
  //         'tbsp Sesame seeds (toasted)',
  //         'Boo dough:',
  //         '135g Plain water',
  //         '250g Plain flour (I used Hong Kong flour)',
  //         '15g Caster sugar',
  //         '1 tsp Oil',
  //       ],
  //       picture: 'https://niqte-recipes-bucket.s3.us-east-2.amazonaws.com/dumpling.jpg'
  //     }
  //   ],
  // });

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
