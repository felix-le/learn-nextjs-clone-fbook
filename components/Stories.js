import React from 'react';

import story1 from '../images/story1.jpg';
import story2 from '../images/story2.jpg';
import story3 from '../images/story3.jpg';
import story4 from '../images/story4.jpeg';
import story5 from '../images/story5.jpeg';

import prof1 from '../images/prof1.jpeg';
import prof2 from '../images/prof2.jpeg';
import prof3 from '../images/prof3.jpeg';
import prof4 from '../images/prof4.jpeg';
import prof5 from '../images/prof5.jpeg';
import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Felix Le',
    src: story1,
    profile: prof1,
  },
  {
    name: 'Giang',
    src: story2,
    profile: prof2,
  },
  {
    name: 'Giang haha',
    src: story3,
    profile: prof3,
  },
  {
    name: 'Giang hoho',
    src: story4,
    profile: prof4,
  },
  {
    name: 'Giang hihi',
    src: story5,
    profile: prof5,
  },
];
const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.length > 0 &&
        stories.map((story, i) => (
          <StoryCard
            key={i}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        ))}
    </div>
  );
};

export default Stories;
