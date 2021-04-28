import Image from 'next/image';
const Home = ({ post: { data: {  body, title, Comments,  createdAt } } }) => {
  return (
   <div className='mt-10 ml-20 mx-3 grid gap-3 sm:grid sm:grid-row-3 sm:ml-32'>
   <small className='text-gray-400'>User Interface</small>
   <h1 className='font-bold text-2xl text-gray-700 py-4 text-left'>
    {title}
   </h1>
   <small className='text-gray-700 pr-2'>
    {`${createdAt}`.slice(0, 10)}
   </small>
   <div className='mr-8'>
     <Image
       src='/Chrysanthemum.jpg'
       alt='Picture of the author'
       width={550}
       height={300}
       className='rounded'
     />
   </div>
     <div className='text-gray-800 pb-6 border'>
       <p className='text-left pr-4'>
         {body}
       </p>
     </div>
   <div className='pb-6'>
     <div>
       <a className='px-2 py-1 text-center text-sm bg-gray-200 rounded'>
         #HCI
       </a>
       <a className='px-1 py-1 text-center text-sm bg-gray-200 rounded ml-1'>
         #Design Thinking
       </a>
     </div>
   </div>
   <div className='border-b border-gray-500 pb-4 mr-10 flex items-center'>
     <p>Share</p>
     <ul className='flex ml-10'>
       <li>
         <svg
           width='10'
           height='18'
           viewBox='0 0 10 18'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <path
             d='M9.5 3H6.5C5.94772 3 5.5 3.44772 5.5 4V7H9.5C9.61374 6.99748 9.7216 7.05039 9.78923 7.14188C9.85685 7.23336 9.87578 7.35201 9.84 7.46L9.1 9.66C9.03181 9.86192 8.84312 9.99842 8.63 10H5.5V17.5C5.5 17.7761 5.27614 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.223858 10 0 9.77614 0 9.5V7.5C0 7.22386 0.223858 7 0.5 7H2V4C2 1.79086 3.79086 0 6 0H9.5C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3Z'
             fill='#474747'
           />
         </svg>
       </li>
       <li className='ml-4'>
         <svg
           width='21'
           height='20'
           viewBox='0 0 21 20'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <path
             d='M20.0015 10.0082C19.9982 14.3106 17.2434 18.1287 13.1615 19.4882C13.0087 19.5353 12.8427 19.5095 12.7115 19.4182C12.5802 19.3227 12.5022 19.1705 12.5015 19.0082V16.3382C12.5231 15.6191 12.3504 14.9074 12.0015 14.2782C11.9487 14.1959 11.9487 14.0905 12.0015 14.0082C12.042 13.9323 12.1163 13.8804 12.2015 13.8682C14.6415 13.6182 16.0015 12.6482 16.0015 10.0082C16.0603 8.77557 15.633 7.56907 14.8115 6.64821C14.9313 6.25922 14.9953 5.85519 15.0015 5.44821C14.9972 5.08333 14.9468 4.72045 14.8515 4.36821C14.7886 4.13333 14.563 3.98009 14.3215 4.00821C13.4052 4.13826 12.5523 4.55073 11.8815 5.18821C10.6396 4.94827 9.36332 4.94827 8.12147 5.18821C7.45062 4.55073 6.59772 4.13826 5.68147 4.00821C5.43996 3.98009 5.21435 4.13333 5.15147 4.36821C5.05616 4.72045 5.00576 5.08333 5.00147 5.44821C5.00769 5.85519 5.07166 6.25922 5.19147 6.64821C4.36995 7.56907 3.94265 8.77557 4.00147 10.0082C4.00147 12.7882 5.51147 13.7182 8.28147 13.9482C7.93762 14.3988 7.70158 14.9222 7.59147 15.4782C7.59147 15.4782 7.59147 15.5482 7.59147 15.5982C7.58666 15.6448 7.58666 15.6917 7.59147 15.7382C7.54986 16.0526 7.2672 16.2778 6.95147 16.2482C6.80093 16.2411 6.65393 16.2001 6.52147 16.1282C5.97668 15.7964 5.49575 15.3697 5.10147 14.8682C4.85026 14.5834 4.58317 14.3129 4.30147 14.0582C4.12248 13.9033 3.92416 13.7722 3.71147 13.6682C3.56243 13.5845 3.38052 13.5845 3.23147 13.6682C3.08839 13.76 3.00176 13.9182 3.00147 14.0882V14.1482C3.00176 14.3182 3.08839 14.4764 3.23147 14.5682C3.59044 14.8687 3.90077 15.2229 4.15147 15.6182C4.57485 16.2816 5.11331 16.8641 5.74147 17.3382C6.15535 17.6157 6.64321 17.762 7.14147 17.7582H7.50147V19.0082C7.5007 19.1705 7.42272 19.3227 7.29147 19.4182C7.16021 19.5095 6.99426 19.5353 6.84147 19.4882C1.99352 17.8735 -0.857286 12.8637 0.230845 7.87112C1.31897 2.87854 5.99597 -0.490604 11.0762 0.0585358C16.1563 0.607676 20.0054 4.89843 20.0015 10.0082Z'
             fill='#474747'
           />
         </svg>
       </li>
       <li className='ml-4'>
         <svg
           width='20'
           height='17'
           viewBox='0 0 20 17'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <path
             d='M19.9698 2.46378C19.4537 3.15213 18.83 3.75258 18.1226 4.24195C18.1226 4.42177 18.1226 4.60158 18.1226 4.79139C18.1282 8.0568 16.8239 11.1879 14.5019 13.4828C12.18 15.7777 9.03469 17.0443 5.77114 16.9988C3.8844 17.0051 2.02183 16.5743 0.329325 15.7401C0.238065 15.7003 0.179203 15.61 0.17955 15.5103V15.4005C0.17955 15.257 0.295781 15.1407 0.43916 15.1407C2.29377 15.0796 4.08222 14.4366 5.55147 13.3026C3.87279 13.2688 2.3624 12.2744 1.66731 10.7453C1.6322 10.6617 1.64313 10.5659 1.69616 10.4925C1.74918 10.419 1.83663 10.3785 1.92692 10.3856C2.43711 10.4369 2.9524 10.3894 3.44464 10.2458C1.59151 9.86109 0.199097 8.32265 -0.000179413 6.43969C-0.00726198 6.34936 0.0332177 6.26187 0.106636 6.20882C0.180054 6.15577 0.275798 6.14483 0.35928 6.17996C0.856578 6.39939 1.39341 6.51496 1.93691 6.51961C0.31313 5.45384 -0.388234 3.42672 0.229475 1.58469C0.293237 1.4057 0.446425 1.27347 0.632746 1.2366C0.819067 1.19972 1.01104 1.26365 1.13811 1.40487C3.32929 3.73695 6.34002 5.12662 9.53547 5.28088C9.45362 4.95427 9.41336 4.61862 9.41565 4.28191C9.44554 2.51636 10.538 0.943567 12.1815 0.299861C13.825 -0.343846 15.6943 0.0689272 16.9144 1.34494C17.746 1.18651 18.55 0.907164 19.3008 0.515789C19.3558 0.481454 19.4255 0.481454 19.4805 0.515789C19.5148 0.57081 19.5148 0.640583 19.4805 0.695604C19.1169 1.52835 18.5025 2.2268 17.7232 2.69355C18.4056 2.6144 19.0761 2.45341 19.7201 2.21404C19.7744 2.17713 19.8456 2.17713 19.8999 2.21404C19.9453 2.23482 19.9793 2.27457 19.9927 2.32269C20.0062 2.37081 19.9978 2.42242 19.9698 2.46378Z'
             fill='#474747'
           />
         </svg>
       </li>
       <li className='ml-4'>
         <svg
           width='18'
           height='17'
           viewBox='0 0 18 17'
           fill='none'
           xmlns='http://www.w3.org/2000/svg'
         >
           <path
             fillRule='evenodd'
             clipRule='evenodd'
             d='M0 2C0 0.89543 0.89543 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM17.5 10.41C17.5345 8.24489 16.0574 6.34762 13.95 5.84999C12.5377 5.5459 11.0657 5.94466 10 6.91999V6.49999C10 6.22385 9.77614 5.99999 9.5 5.99999H7C6.72386 5.99999 6.5 6.22385 6.5 6.49999V16.5C6.5 16.7761 6.72386 17 7 17H9.5C9.77614 17 10 16.7761 10 16.5V10.86C9.97531 9.85571 10.6753 8.97867 11.66 8.77999C12.2464 8.67878 12.8473 8.8439 13.2997 9.2305C13.752 9.6171 14.0087 10.185 14 10.78V16.5C14 16.7761 14.2239 17 14.5 17H17C17.2761 17 17.5 16.7761 17.5 16.5V10.41ZM4 6.5V16.5C4 16.7761 3.77614 17 3.5 17H1C0.723858 17 0.5 16.7761 0.5 16.5V6.5C0.5 6.22386 0.723858 6 1 6H3.5C3.77614 6 4 6.22386 4 6.5Z'
             fill='#474747'
           />
         </svg>
       </li>
     </ul>
   </div>
   <div>
     <h1 className='font-semi-bold font-mono  text-2xl text-gray-700 pt-10 pb-7'>
       Add a Comment
     </h1>
     <form className='flex flex-col sm:flex-row sm:items-center items-start'>
       <label>Name: </label>
       <input
         type='text'
         className='bg-gray-300 px-2 py-2 border rounded'
         placeholder='Your Name'
       />
       <label className='ml-4'>Email: </label>
       <input
         type='Email'
         className='bg-gray-300 px-2 py-2 rounded'
         placeholder='Email'
       />
       <label className='ml-4'>Website: </label>
       <input
         type='text'
         className='bg-gray-300 px-2 py-2 border rounded'
         placeholder='Website'
       />
     </form>
     <div>
       <p>
         {' '}
         <input type='checkbox' /> Save my name, email, and website in this
         browser for the next time I comment
       </p>
     </div>
     <h1 className='font-semi-bold font-mono  text-2xl text-gray-700 pt-10 pb-5'>
       Message
     </h1>
     <textarea
       placeholder='Write Something'
       className='bg-gray-300 px-20 py-10 sm:px-56 sm:py-20 md:px-30 md:py10 rounded'
     ></textarea>
     <div className='pt-4'>
       <a className='px-5 py-2 text-center text-sm bg-gray-800 text-white rounded '>
         Post
       </a>
     </div>
     <div>
       <h1 className='font-semi-bold font-mono text-2xl text-gray-700 pt-10 pb-5'>
         Comments
       </h1>
       {Comments.map ((comment) => <div key={comment.id}  className='flex items-center my-8 border border-transparent sm:border-none'>
            <div className='flex items-center ' 
            >
              <Image
                src='/user.png'
                alt=''
                width={100}
                height={100}
                className='rounded'
              />
               <div  className='ml-4'>
                <p className='font-semi-bold font-mono text-xl text-gray-700 pb-4'>
                {comment.name}
                  <span className='text-sm text-gray-300 pb-3 pl-3'>
                    {`${comment.createdAt}`.slice(0, 10)}
                  </span>
                </p>
                <p>
                  {comment.body}
                </p>
                <p className='pt-4'>
                  {comment.email}
                </p>
                <div className='flex items-center mt-1'>
                  <svg
                    width='16'
                    height='14'
                    viewBox='0 0 16 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z'
                      fill='#777777'
                    />
                  </svg>
                  <p className='ml-2'>Reply</p>
                </div>
              </div>
            </div>
          </div>)}
     </div>
   </div>
 </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${params.id}`);
  // so much power!
  if (!res.ok) {
    {
      Location: '/blogs';
    }
    return { props: {} };
  }

  const post = await res.json();
  return {
    props: { post },
  };
}

export default Home