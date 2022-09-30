import { reviews } from '@/data/reviews';
import Image from 'next/image';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import SectionTitle from '../shared/SectionTitle';

const reviewSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};
const Testimonial = () => {
  return (
    <>
      <SectionTitle>Client Reviews</SectionTitle>
      <div className="mt-16">
        <Slider {...reviewSettings}>
          {reviews.map((review, index) => (
            <div className="mb-6" key={index}>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full">
                  <Image src={review.author.imageUrl} height={100} width={100} alt={review.author.name} />
                </div>
                <h6 className="mt-3 text-lg font-semibold">{review.author.name}</h6>
                <p className="text-sm text-gray-400 dark:text-gray-200">
                  {review.author.designation} at {review.author.company}.
                </p>
                <div className="mt-6 max-w-2xl rounded-2xl bg-white p-8 text-gray-500 shadow-lg dark:bg-gray-700 dark:text-gray-200">
                  {review.comment}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
