const faker = require('faker');

const generateRecipes = () => {
  const data = { recipes: [] };

  for (let i = 0; i < 10; i += 1) {
    const recipeName = faker.commerce.productName();
    const minutes = faker.random.number(60);
    const ingredients = faker.random.number(15);
    const image = faker.image.food(440, 220);
    data.recipes.push({
      id: i,
      name: recipeName,
      mins: minutes,
      ingredients,
      image
    });
  }

  return data;
};

const generateCategories = () => {
  const data = { categories: [] };

  for (let i = 0; i < 10; i += 1) {
    const image = faker.image.food(155, 105);
    const categoryName = faker.commerce.department();

    data.categories.push({ id: i, name: categoryName, image });
  }

  return data;
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

  return { name, images, ingredients, steps };
};

module.exports = () => {
  const recipes = generateRecipes();
  const categories = generateCategories();
  const images = generateImages();
  const recipe = generateRecipeData();

  const data = { recipes, categories, images, recipe };

  return data;
};
