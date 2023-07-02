import { FiCheck } from 'react-icons/fi';

const features = [
  'Unlimited projects',
  'Lifetime access',
  'Customer support',
  'Free updates',
];

export const products = [
  {
    name: 'Application',
    price: '$149',
    icon: FiCheck,
    description: 'For accessible applications',
    features: ['Application components', ...features],
  },
  {
    name: 'E-Commerce',
    price: '$149',
    icon: FiCheck,
    description: 'For stunning online shops',
    features: ['E-Commerce components', ...features],
  },
  {
    name: 'Marketing',
    price: '$149',
    icon: FiCheck,
    description: 'For impressive landing pages',
    features: ['Marketing components', ...features],
  },
];
