import images from './images';

const wines = [
  {
    title: 'Smoked Meat Sandwich',
    price: '$56',
    tags: 'Baguette, basil, arugula, olives, cherry-tomatoes.',
  },
  {
    title: 'Salmon Sandwich',
    price: '$59',
    tags: 'Salmon, butter, lemon juice, onion, garlic & salad.',
  },
  {
    title: 'Pan Of Fried Eggs',
    price: '$44',
    tags: 'Eggs, bacon and cherry-tomatoes with bread.',
  },
  {
    title: 'Breakfast Set',
    price: '$31',
    tags: 'Croissants with strawberries, mascarpone, honey.',
  },
  {
    title: 'Healthy Breakfast',
    price: '$26',
    tags: 'Oat granola with fresh blueberries, almond, yogurt.',
  },
];

const cocktails = [
  {
    title: 'Chicken Breast',
    price: '$20',
    tags: 'Paupiette of chicken, blue cheese, rosemary beans.',
  },
  {
    title: "Salmon Steak",
    price: '$16',
    tags: 'Salmon, butter, lemon juice, onion, garlic & salad.',
  },
  {
    title: 'Chicken Crispy',
    price: '$10',
    tags: 'Smoked quail, crispy egg, spelt, girolles, parsley.',
  },
  {
    title: 'Grilled Fillet',
    price: '$31',
    tags: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.',
  },
  {
    title: 'Salmon Steak',
    price: '$26',
    tags: 'Salmon, butter, lemon juice, onion, garlic & salad.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
