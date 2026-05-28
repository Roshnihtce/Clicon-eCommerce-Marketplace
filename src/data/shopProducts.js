import phone from '../assets/images/SmartPhone3.webp'
import phone2 from '../assets/images/Smartphone.webp'
import monitor from '../assets/images/TV2.webp'
import headphone from '../assets/images/headphone1.webp'
import drone from '../assets/images/Wishing.webp'
import tv from '../assets/images/TV.webp'
import monitor2 from '../assets/images/monitor4.webp'
import smartphone from '../assets/images/Phones2.webp'
import headphone2 from '../assets/images/Headphone4.webp'
import keyboard from '../assets/images/Accessories.webp'
import printer from '../assets/images/printer2.webp'
import bluetooth from '../assets/images/Bluetooth.webp'
import camera from '../assets/images/flashsale1.webp'
import printer2 from '../assets/images/flashsale4.webp'
import washingmachine from '../assets/images/washing-machine.webp'
import monitor3 from '../assets/images/monitor2.webp'
import ac from '../assets/images/ac.webp'
import phone4 from '../assets/images/smartphone6.webp'
import macbook from '../assets/images/macbook.webp'
import iphone from '../assets/images/smartphone5.webp'
import monitor5 from '../assets/images/monitor3.webp'

const shopProducts = [
  {
    id: 1,
    image: phone,
    gallery: [phone, phone, phone, phone, phone, phone],
    title: '2020 Apple MacBook Pro with Apple M1 Chip',
    brand: 'Apple',
    category: 'Electronics Devices',
    tags: ['laptop', 'apple', 'macbook', 'premium'],
    price: '$1699',
    oldPrice: '$1999',
    discount: '21% OFF',
    rating: 4.7,
  },

  {
    id: 2,
    image: smartphone,
    title: 'Samsung Electronics Samsung Galaxy S21 5G',
    brand: 'Samsung',
    category: 'SmartPhone',
    tags: ['samsung', 'android', 'phone', '5g'],
    price: '$2,300',
    rating: 536,
  },

  {
    id: 3,
    image: monitor,
    title: 'Amazon Basics High-Speed HDMI Cable',
    brand: 'Amazon',
    category: 'Computer Accessories',
    tags: ['hdmi', 'cable', '4k', 'accessory'],
    price: '$360',
    discount: 'BEST DEALS',
    rating: 423,
  },

  {
    id: 4,
    image: headphone,
    title: 'Portable Washing Machine',
    category: 'TV & Homes Appliances',
    tags: ['washing', 'machine', 'home'],
    price: '$80',
    rating: 816,
  },

  {
    id: 5,
    image: drone,
    title: 'Wired Over-Ear Gaming Headphones',
    category: 'Headphone',
    tags: ['gaming', 'headphones', 'audio'],
    price: '$1,500',
    rating: 647,
  },

  {
    id: 6,
    image: tv,
    title: 'Polaroid Tripod Camera Stand',
    category: 'Camera & Photo',
    tags: ['camera', 'tripod', 'photo'],
    price: '$1,200',
    rating: 877,
  },

  {
    id: 7,
    image: monitor2,
    title: 'Dell All-in-One Computer Monitor',
    category: 'Computer & Laptop',
    tags: ['dell', 'monitor', 'pc'],
    price: '$250',
    rating: 426,
  },

  {
    id: 8,
    image: phone2,
    title: '4K UHD Smart TV',
    category: 'TV & Homes Appliances',
    tags: ['tv', 'smart', '4k'],
    price: '$220',
    rating: 583,
  },

  {
    id: 9,
    image: headphone2,
    title: 'HDMI Cable Premium',
    category: 'Computer Accessories',
    tags: ['hdmi', 'cable'],
    price: '$360',
    rating: 994,
  },

  {
    id: 10,
    image: headphone,
    title: 'Portable Washing Machine Model 18NMF',
    category: 'TV & Homes Appliances',
    tags: ['washing', 'machine'],
    price: '$80',
    rating: 798,
  },

  {
    id: 11,
    image: keyboard,
    title: 'TOZO T6 Wireless Earbuds',
    category: 'Headphone',
    tags: ['earbuds', 'wireless', 'audio'],
    price: '$70',
    discount: 'HOT',
    rating: 600,
  },

  {
    id: 12,
    image: printer,
    title: 'Dell Optiplex Monitor',
    category: 'Computer Accessories',
    tags: ['monitor', 'desktop'],
    price: '$250',
    rating: 492,
  },

  {
    id: 13,
    image: bluetooth,
    title: 'Samsung Galaxy S21 5G',
    category: 'SmartPhone',
    tags: ['samsung', 'phone', '5g'],
    price: '$2,300',
    rating: 740,
  },

  {
    id: 14,
    image: camera,
    title: 'Smart TV Chromecast',
    category: 'TV & Homes Appliances',
    tags: ['tv', 'smart'],
    price: '$220',
    rating: 556,
  },

  {
    id: 15,
    image: printer2,
    title: 'Gaming Headphones USB',
    category: 'Headphone',
    tags: ['gaming', 'audio'],
    price: '$1,500',
    rating: 536,
  },

  {
    id: 16,
    image: washingmachine,
    title: 'Polaroid Tripod Deluxe',
    category: 'Camera & Photo',
    tags: ['tripod', 'camera'],
    price: '$1,200',
    rating: 423,
  },

  {
    id: 17,
    image: monitor3,
    title: 'TOZO Earbuds',
    category: 'Headphone',
    tags: ['earbuds', 'audio'],
    price: '$70',
    rating: 738,
  },

  {
    id: 18,
    image: smartphone,
    title: 'Samsung Galaxy S21',
    category: 'SmartPhone',
    tags: ['phone', 'android'],
    price: '$2,300',
    rating: 536,
  },

  {
    id: 19,
    image: ac,
    title: 'HDMI Cable 4K',
    category: 'Computer Accessories',
    tags: ['hdmi', '4k'],
    price: '$360',
    rating: 423,
  },

  {
    id: 20,
    image: headphone,
    title: 'Portable Washing Machine',
    category: 'TV & Homes Appliances',
    tags: ['washing'],
    price: '$80',
    rating: 816,
  },

  {
    id: 21,
    image: phone4,
    title: 'Apple iPhone 14 Pro Max',
    category: 'SmartPhone',
    tags: ['iphone', 'apple', 'premium'],
    price: '$649',
    rating: 816,
  },

  {
    id: 22,
    image: macbook,
    title: 'Dell Monitor System',
    category: 'Computer & Laptop',
    tags: ['pc', 'monitor'],
    price: '$250',
    rating: 426,
  },

  {
    id: 23,
    image: iphone,
    title: 'Apple iPhone 13 Pro',
    category: 'SmartPhone',
    tags: ['iphone', 'apple'],
    price: '$649',
    rating: 816,
  },

  {
    id: 24,
    image: monitor5,
    title: 'TOZO Premium Earbuds',
    category: 'Headphone',
    tags: ['earbuds', 'audio'],
    price: '$70',
    rating: 738,
  },
]

export default shopProducts

// const shopProducts = [
//   {
//     id: 1,

//     image: phone,

//     gallery: [
//       phone,
//       phone,
//       phone,
//       phone,
//       phone,
//       phone
      
//     ],

//     title:
//       '2020 Apple MacBook Pro with Apple M1 Chip',

//     brand: 'Apple',

//     category: 'Electronics Devices',

//     price: '$1699',

//     oldPrice: '$1999',

//     discount: '21% OFF',

//     rating: 4.7,

//     reviews: 738,

//     stock: 'In Stock',

//     sku: 'A264671',

//     colors: [
//       '#c08457',
//       '#d9d9d9',
//     ],

//     sizes: [
//       '14-inch Liquid Retina XDR Display',
//       '16-inch Retina Display',
//     ],

//     storage: [
//       '1TB SSD Storage',
//       '512GB SSD Storage',
//     ],

//     shortDescription:
//       'Apple M1 chip with 8-core CPU delivers incredible performance.',

//     description:
//       'The most powerful MacBook Pro ever is here. With blazing-fast M1 chip performance and stunning Liquid Retina XDR display.',

//     features: [
//       'Free 1 Year Warranty',
//       'Free Shipping & Fasted Delivery',
//       '100% Money-back guarantee',
//       '24/7 Customer support',
//       'Secure payment method',
//     ],
//   },

//   {
//     id: 2,
//     image: smartphone,
//     title:
//       'Samsung Electronics Samsung Galaxy S21 5G',
//     price: '$2,300',
//     rating: 536,
//   },

//   {
//     id: 3,
//     image: monitor,
//     title:
//       'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)',
//     price: '$360',
//     discount: 'BEST DEALS',
//     rating: 423,
//   },

//   {
//     id: 4,
//     image: headphone,
//     title:
//       'Portable Washing Machine, 11lbs capacity Model 18NMF',
//     price: '$80',
//     rating: 816,
//   },

//   {
//     id: 5,
//     image: drone,
//     title:
//       'Wired Over-Ear Gaming Headphones with USB',
//     price: '$1,500',
//     rating: 647,
//   },

//   {
//     id: 6,
//     image: tv,
//     title:
//       'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Case',
//     price: '$1,200',
//     oldPrice: '$1600',
//     discount: '25% OFF',
//     rating: 877,
//   },

//   {
//     id: 7,
//     image: monitor2,
//     title:
//       'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
//     price: '$250',
//     rating: 426,
//   },

//   {
//     id: 8,
//     image: phone2,
//     title:
//       '4K UHD LED Smart TV with Chromecast Built-in',
//     price: '$220',
//     discount: 'SALE',
//     rating: 583,
//   },

//   {
//     id: 9,
//     image: headphone2,
//     title:
//       'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)',
//     price: '$360',
//     discount: 'BEST DEALS',
//     rating: 994,
//   },

//   {
//     id: 10,
//     image: headphone,
//     title:
//       'Portable Washing Machine, 11lbs capacity Model 18NMF',
//     price: '$80',
//     rating: 798,
//   },

//   {
//     id: 11,
//     image: keyboard,
//     title:
//       'TOZO T6 True Wireless Earbuds Bluetooth Headphones',
//     price: '$70',
//     discount: 'HOT',
//     rating: 600,
//   },

//   {
//     id: 12,
//     image: printer,
//     title:
//       'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
//     price: '$250',
//     rating: 492,
//   },

//   {
//     id: 13,
//     image: bluetooth,
//     title:
//       'Samsung Electronics Samsung Galaxy S21 5G',
//     price: '$2,300',
//     rating: 740,
//   },

//   {
//     id: 14,
//     image: camera,
//     title:
//       '4K UHD LED Smart TV with Chromecast Built-in',
//     price: '$220',
//     discount: 'SALE',
//     rating: 556,
//   },

//   {
//     id: 15,
//     image: printer2,
//     title:
//       'Wired Over-Ear Gaming Headphones with USB',
//     price: '$1,500',
//     rating: 536,
//   },

//   {
//     id: 16,
//     image: washingmachine,
//     title:
//       'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Case',
//     price: '$1,200',
//     oldPrice: '$1600',
//     discount: '25% OFF',
//     rating: 423,
//   },

//   {
//     id: 17,
//     image: monitor3,
//     title:
//       'TOZO T6 True Wireless Earbuds Bluetooth Headphones',
//     price: '$70',
//     oldPrice: '$75',
//     discount: 'HOT',
//     rating: 738,
//   },

//   {
//     id: 18,
//     image: smartphone,
//     title:
//       'Samsung Electronics Samsung Galaxy S21 5G',
//     price: '$2,300',
//     rating: 536,
//   },

//   {
//     id: 19,
//     image: ac,
//     title:
//       'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)',
//     price: '$360',
//     discount: 'BEST DEALS',
//     rating: 423,
//   },

//   {
//     id: 20,
//     image: headphone,
//     title:
//       'Portable Washing Machine, 11lbs capacity Model 18NMF',
//     price: '$80',
//     rating: 816,
//   },

//   {
//     id: 21,
//     image: phone4,
//     title:
//       'Apple iPhone 14 Pro Max',
//     price: '$649',
//     oldPrice: '$749',
//     rating: 816,
//   },

//   {
//     id: 22,
//     image: macbook,
//     title:
//       'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
//     price: '$250',
//     rating: 426,
//   },

//   {
//     id: 23,
//     image: iphone,
//     title:
//       'Apple iPhone 13 Pro',
//     price: '$649',
//     oldPrice: '$749',
//     rating: 816,
//   },

//   {
//     id: 24,
//     image: monitor5,
//     title:
//       'TOZO T6 True Wireless Earbuds Bluetooth Headphones',
//     price: '$70',
//     discount: 'HOT',
//     rating: 738,
//   },
// ]

// export default shopProducts