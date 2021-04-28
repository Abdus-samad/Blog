import React from 'react';
import Link from 'next/link';

const Index = ({ posts, loading }) => {
  if (loading) {
    return (
      <h2 className="'px-10 my-4 py-6 rounded shadow-xl border border-black bg-white w-4/5 mx-auto">
        loading
      </h2>
    );
  }
  return(
    <ul
    className=' grid lg:grid-cols-3 border ml-20 mr-20 gap-3'
    style={{ background: '#edf2f7' }}
  >
    {' '}
    {posts.map((post) => (
      <div  key={post.id} className='px-10 my-4 py-6 rounded shadow-xl bg-white w-4/5 mx-auto'>
        <div className='flex justify-between items-center'>
          <span className='font-light text-gray-600'>{`${post.createdAt}`.slice(0, 10)}</span>
        </div>
        <div className='mt-2'>
          <li className="">
            <a
              className='text-2xl text-gray-700 font-bold hover:text-gray-600'
              href='#'
            > {post.title}</a>
          </li>
        </div>
        <div className='flex justify-between items-center mt-4'>
        <Link key={post.id} href='/blogs/[id]' as={`/blogs/${post.id}`}>
            <a className='text-blue-600 hover:underline'>View Blog</a>
          </Link>
        </div>
      </div>
    ))}
  </ul>
  )
};

export default Index;
