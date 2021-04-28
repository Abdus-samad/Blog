import React, { useState } from 'react';
import Body from '../src/components/layout/Body';
import Pagination from '../src/components/Pagination';
import Link from 'next/link';

const Home = ({ posts, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);


  const IndexOfLastPost = currentPage * postsPerPage;
  const IndexOfFirstPost = IndexOfLastPost - postsPerPage;
  const currentPosts = posts.data.slice(IndexOfFirstPost, IndexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='m-auto container'>
      <h1
        className='mt-9 ml-20 font-bold text-4xl text-gray-700
       pb-4 sm:space-y-0'
      >
        Recent Posts
      </h1>
      <Body posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.data.length}
        paginate={paginate}
      />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
      loading: false,
    },
  };
}
export default Home;
