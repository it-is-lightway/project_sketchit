import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout.jsx';
import Spinner from './Spinner';

const Feed = () => {
  const [scrapes, setScrapes] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setScrapes(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setScrapes(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} sketches to your feed!`} />
    )
  }
  else if (scrapes?.length === 0) {
   
   return(
     <h3 className="text-lg text-center px-2 font-bold" style={{marginTop: 50}}>{` We are sorry, No  ${ideaName} sketches found!`}</h3>
   )
  } 
  return (
    <div>
      {scrapes && (
        <MasonryLayout scrapes={scrapes} />
      )}
    </div>
  );
};

export default Feed;