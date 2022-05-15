const { Post } = require('../models');

const postdata = [
  {
    title: 'Whirlpool washer.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    user_id: 10
  },
  {
    title: 'Samsung tv.',
    short_desc: '57 inch barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    user_id: 8
  },
  {
    title: 'Eliptical machine bowflex.',
    short_desc: 'eliptical machine brand new',
    price: 225.0,
    extend_desc: "Selling caus I dont use it!",
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    user_id: 7
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    short_desc: 'Whirlpool washer barely used',
    price: 225.0,
    extend_desc: "Selling it because I'm noving, good washer!",
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
