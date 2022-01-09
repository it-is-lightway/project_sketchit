import React from 'react';
import Masonry from 'react-masonry-css';
import Scrape from './Scrape'

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ scrapes }) => (
  <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
    {scrapes?.map((scrape) => <Scrape key={scrape._id} scrape={scrape} className="w-max" />)}
  </Masonry>
);

export default MasonryLayout;