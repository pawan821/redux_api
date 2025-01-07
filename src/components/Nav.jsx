import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from './Context';

const Nav = () => {

  const [products] = useContext(UserContext);

  const { search, pathname } = useLocation();


  // let distinctCategory = product && product.reduce((acc, cv) => [...acc, cv.category], []);
  // distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);

  let distinctCategory = products && [...new Set(products.map(p => p.category))];

  let color = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4 )`
  }


  return (
    <nav className='w-[20%] bg-zinc-100 p-5'>
      <div className='flex items-center flex-col'>
        {(pathname !== '/' || search.length > 0) && (<Link to='/' className='bg-gray-400 p-1 px-4 rounded mb-3 border-2 border-black'>Home</Link>)}

        <a className='bg-gray-400 px-2 py-1 rounded mt-3 border-2 border-black' href='/create'>Add New Product</a>
      </div>
      <hr className='my-5' />
      <div>
        <h1 className='text-center text-xl font-semibold mb-3'>Category</h1>

        <ul>
          {distinctCategory.map((c, i) => (
       
            <Link
              to={`/?category=${c}`}
              key={i}
              className='flex items-center bg-red-100 px-1 rounded mb-2'
            >
              <span style={{ backgroundColor: color() }} className='inline-block w-4 h-4 rounded-full mr-2'></span>
              {c}
            </Link>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Nav