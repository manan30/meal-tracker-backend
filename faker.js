const faker = require('faker');

const generateRecipes = () => {
  const recipes = [];

  for (let i = 0; i < 10; i += 1) {
    const recipeName = faker.commerce.productName();
    const minutes = faker.random.number(60);
    const ingredients = faker.random.number(15);
    const image = faker.image.food(440, 220);
    recipes.push({
      id: i,
      name: recipeName,
      mins: minutes,
      ingredients,
      image
    });
  }

  return recipes;
};

const generateCategories = () => {
  const categories = [];

  for (let i = 0; i < 10; i += 1) {
    const image = faker.image.food(155, 105);
    const categoryName = faker.commerce.department();

    categories.push({ id: i, name: categoryName, image });
  }

  return categories;
};

const generateImages = () => {
  const images = [];

  for (let i = 0; i < 10; i += 1) {
    const image = faker.image.food(155, 105);

    images.push({ id: i, image });
  }

  return images;
};

const generateRecipeData = () => {
  const images = new Array(10).fill(0).map(() => faker.image.food(150, 105));
  const name = faker.commerce.product();
  const ingredients = new Array(10).fill(0).map(faker.commerce.productMaterial);
  const steps = new Array(8)
    .fill(0)
    .map(() => faker.lorem.sentences(Math.floor(Math.random() * (3 - 1)) + 1));
  const nutritionalInfo = new Array(10).fill(0).map(() => {
    const number = faker.random.number();
    const text = faker.random.word();
    return `${number} ${text}`;
  });

  return { name, images, ingredients, steps, nutritionalInfo };
};

const generateTopRecipes = () => {
  const recipe = () => {
    return {
      id: faker.random.number(),
      name: faker.random
        .words(3)
        .split(' ')
        .join(' ')
    };
  };

  const topRecipes = new Array(5).fill(0).map(recipe);

  return topRecipes;
};

const generateFeedRecipes = options => {
  const user = () => {
    return {
      id: faker.random.number(),
      profilePicture: faker.image.avatar(),
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      lastPosted: faker.random.number(12)
    };
  };

  const recipe = () => {
    return {
      id: faker.random.number(),
      recipeImage: faker.random.image(),
      recipeName: faker.commerce.productName(),
      recipeDesc: faker.lorem.lines(4),
      likes: faker.random.number(),
      comments: faker.random.number()
    };
  };

  const recipes = new Array((options && 100) || 15).fill(0).map(() => {
    return { user: user(), recipe: recipe() };
  });

  return recipes;
};

module.exports = () => {
  // const recipes = generateRecipes();
  // const categories = generateCategories();
  // const images = generateImages();
  // const recipe = generateRecipeData();

  const topRecipes = generateTopRecipes();
  const feedRecipes = generateFeedRecipes();
  const recipes = generateFeedRecipes('feed');

  const feed = { topRecipes, feedRecipes };
  // const data = { recipes, categories, images, recipe };

  const data = { feed, recipes };

  return data;
};
