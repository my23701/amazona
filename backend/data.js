import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'White Mohey Ethnic Simple Kurta',
      slug: 'white-ethnic-Simple-Kurta',
      category: 'Kurtas',
      image: '/images/p1.jpg',
      price: 1200,
      countInStock: 10,
      brand: 'Mohey',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '2',
      name: 'Black Mohey Ethnic Simple Kurta',
      slug: 'black-ethnic-Simple-Kurta',
      category: 'Kurtas',
      image: '/images/p2.jpg',
      price: 1200,
      countInStock: 15,
      brand: 'Mohey',
      rating: 4.0,
      numReviews: 5,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'HOP Blue Ethnic Simple Kurta',
      slug: 'blue-ethnic-Simple-Kurta',
      category: 'Kurtas',
      image: '/images/p3.jpg',
      price: 1500,
      countInStock: 20,
      brand: 'House of Patodi',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Peter England Red Slim shirt',
      slug: 'pe-slim-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 1250,
      countInStock: 30,
      brand: 'Peter England',
      rating: 4.5,
      numReviews: 50,
      description: 'high quality product',
    },
    {
      //_id: '5',
      name: 'Wrangler Green Slim shirt',
      slug: 'wrangler-slim-shirt',
      category: 'Shirts',
      image: '/images/p5.jpg',
      price: 740,
      countInStock: 15,
      brand: 'Wrangler',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '6',
      name: 'Raymond Black Slim shirt',
      slug: 'raymond-slim-shirt',
      category: 'Shirts',
      image: '/images/p6.jpg',
      price: 1600,
      countInStock: 25,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 12,
      description: 'high quality product',
    },
    {
      //_id: '7',
      name: 'Peter England Creame Slim Pant',
      slug: 'pe-slim-pant',
      category: 'Pants',
      image: '/images/p7.jpg',
      price: 1800,
      countInStock: 35,
      brand: 'Peter England',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '8',
      name: 'Raymond Green Slim Pant',
      slug: 'raymond-slim-pant',
      category: 'Pants',
      image: '/images/p8.jpg',
      price: 2350,
      countInStock: 15,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 8,
      description: 'high quality product',
    },
    {
      //_id: '9',
      name: 'Red Tape Brown Slim Pant',
      slug: 'rt-slim-pant',
      category: 'Pants',
      image: '/images/p9.jpg',
      price: 1200,
      countInStock: 25,
      brand: 'Red Tape',
      rating: 4.1,
      numReviews: 12,
      description: 'high quality product',
    },
  ],
};
export default data;
