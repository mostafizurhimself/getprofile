import { Review } from '@/types';

export const reviews: Review[] = [
  {
    author: {
      name: 'John Doe',
      imageUrl: '/images/avatar/avatar-1.png',
      designation: 'General Manager',
      company: 'Lockheed Martin',
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore similique quas fuga ad
        doloremque natus iste modi numquam sapiente esse tenetur, ipsam, nisi vitae et vero, ducimus dolorem
        est! Good luck! 🔥`,
  },
  {
    author: {
      name: 'William Smith',
      imageUrl: '/images/avatar/avatar-2.png',
      designation: 'CEO',
      company: 'Bomerang',
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore similique quas fuga ad
        doloremque natus iste modi numquam sapiente esse tenetur, ipsam, nisi vitae et vero, ducimus dolorem
        est! Good luck! 🔥`,
  },
  {
    author: {
      name: 'Eloise Harper',
      imageUrl: '/images/avatar/avatar-3.png',
      designation: 'CTO',
      company: 'Starbucks',
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore similique quas fuga ad
        doloremque natus iste modi numquam sapiente esse tenetur, ipsam, nisi vitae et vero, ducimus dolorem
        est! Good luck! 🔥`,
  },
];
