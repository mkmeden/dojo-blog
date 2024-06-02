import { useState,useEffect } from 'react';
import useFetch from './useFetch';
import BlogList  from './BlogList';
const Home = () => {
  
const {data : blogs} = useFetch('http://localhost:8000/blogs/');

  return (
    <div className="home">
      {blogs ===null? <h1>Loading</h1> : <BlogList blogs={blogs }  title={ 'All blogs'} />}
    </div>
  );
};

export default Home;