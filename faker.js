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

module.exports = () => {
  const recipes = generateRecipes();
  const categories = generateCategories();

  const data = { recipes, categories };

  return data;
};
