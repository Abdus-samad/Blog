import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='rounded-xl p-8'>
    <div className='flex justify-center'>

      <Image
        src='/user.png'
        alt='Picture of the author'
        width={384}
        height={384}
        className='rounded'
      />
    </div>
      <div className='pt-6 text-center space-y-4'>
        <blockquote>
          <p className='text-lg font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus
            labore vitae neque. Laborum blanditiis nesciunt officia neque alias
            vitae quia. Ab incidunt et iure delectus recusandae aperiam quia
            voluptatum reprehenderit corrupti vitae? Deleniti nisi assumenda rem
            veritatis nemo accusamus, unde, fugiat quisquam provident eos fuga,
            quae velit repellat. Dolore.
          </p>
        </blockquote>
        <figcaption className='font-medium'>
          <div className='text-blue-900'>Ajao Abdussamad</div>
          <div className='text-gray-500'>
            Email: abdussamadajao@gmail.com 
          </div>
          <div className='text-gray-500'>
            Phone: 08054176385
          </div>
        </figcaption>
      </div>
    </div>
  );
};

export default About;
