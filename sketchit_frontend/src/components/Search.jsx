import React, { useEffect, useState } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = ({ searchTerm }) => {
  const [scrapes, setScrapes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setScrapes(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setScrapes(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <div>

      {loading && <Spinner message="Searching Sketches" />}
      {scrapes?.length !== 0 && <MasonryLayout scrapes={scrapes} />}
      {scrapes?.length === 0 && searchTerm !== '' && !loading && (
        <div className="mt-10 text-center text-xl ">No Scrapes Found!</div>
      )}
    </div>
  );
};

export default Search;
