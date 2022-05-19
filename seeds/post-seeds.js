const { Post } = require('../models');

const postdata = [
  {
    title: 'Whirlpool washer.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "Nashville",
    user_id: 10,
    category_id: 1,
  },
  {
    title: 'Samsung tv.',
    short_desc: '57 inch barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "San Francisco",
    user_id: 8,
    category_id: 2,
  },
  {
    title: 'Eliptical machine bowflex.',
    short_desc: 'eliptical machine brand new',
    price: 225.0,
    extend_desc: "Selling caus I dont use it!",
    city: "Los Angeles",
    user_id: 1,
    category_id: 2,
  },
  {
    title: 'Nunc purus.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "Nashville",
    user_id: 4,
    category_id: 2,
  },
  {
    title: 'Pellentesque eget nunc.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "Chicago",
    user_id: 7,
    category_id: 2,
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "Miami",
    user_id: 7,
    category_id: 3,
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    city: "Nashville",
    user_id: 2,
    category_id: 2,
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
