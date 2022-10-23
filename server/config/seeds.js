const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Oil Filter' },
    { name: 'Batteries' },
    { name: 'Brake Pads' },
    { name: 'Engine Oil' },
    { name: 'Wipers' },
    {name: 'Alternator'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Duralast Alternator',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'alternator-one.webp',
      category: categories[5]._id,
      price: 124.99,
      quantity: 50
    },
    {
      name: 'Flex Alternator',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'alternator.webp',
      category: categories[5]._id,
      price: 145.38,
      quantity: 45
    },
    {
      name: 'Flex Brake Pads',
      category: categories[2]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'brake-pads-one.webp',
      price: 48.99,
      quantity: 20
    },
    {
      name: 'Duralast Brake Pad',
      category: categories[2]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'brake-pads.webp',
      price: 69.99,
      quantity: 40
    },
    {
      name: 'AMG Battery',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'durablast-two.webp',
      price: 249.99,
      quantity: 10
    },
    {
      name: 'Flex Battery',
      category: categories[1]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'durablast.webp',
      price: 399.99,
      quantity: 7
    },
    {
      name: 'Mobil Engine Oil',
      category: categories[3]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'mobile-one.webp',
      price: 9.99,
      quantity: 130
    },
    {
      name: 'STP Engine Oil',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'stp.webp',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Flex Oil Filter',
      category: categories[0]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'oil-filter-one.webp',
      price: 18.99,
      quantity: 1000
    },
    {
      name: 'STP Oil Filter',
      category: categories[0]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'stp-oil-filter.webp',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'USR Oil Filter',
      category: categories[0]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'oil-filter.webp',
      price: 59.99,
      quantity: 100
    },
    {
      name: 'Flex Wiper',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'wiper.webp',
      price: 7.99,
      quantity: 6000
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Dennis',
    lastName: 'Itua',
    email: 'ditua@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Grace',
    lastName: 'Itua',
    email: 'gitua@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});