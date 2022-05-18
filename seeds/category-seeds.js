const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Apparel',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Furniture',
  },
  ];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;