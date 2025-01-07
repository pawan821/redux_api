import React, { useContext, useState } from 'react'
import { UserContext } from './Context';
import { nanoid } from 'nanoid';
const Create = () => {
  const [products, setproducts] = useContext(UserContext);
  const [image, setimage] = useState('');
  const [title, settitle] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');

  const addProductHandler = (e) => {
    e.preventDefault();

    if (image.trim().length < 5 ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert('Please fill all the fields atleast 5 characters');
      return;
    }

    const newProduct = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setproducts([...products, newProduct]);
  }


  return (
    <form onSubmit={addProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
      <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>
      <input
        type='url'
        value={image}
        placeholder='image link'
        className='w-1/2 p-2 my-2 border-2 border-gray-400 rounded'
        onChange={(e) => setimage(e.target.value)}
      />
      <input
        type='text'
        value={title}
        placeholder='Title'
        className='w-1/2 p-2 my-2 border-2 border-gray-400 rounded'
        onChange={(e) => settitle(e.target.value)}
      />
      <div className='w-1/2 flex justify-between'>
        <input
          type='text'
          value={category}
          placeholder='category'
          className='w-[49%] p-2 my-2 border-2 border-gray-400 rounded'
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type='number'
          value={price}
          placeholder='price'
          className='w-[49%] p-2 my-2 border-2 border-gray-400 rounded'
          onChange={(e) => setprice(e.target.value)}

        />
      </div>
      <textarea
        placeholder='description'
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className='w-1/2 text-1xl p-2 mb-3 border-2 border-gray-400 rounded'
        rows={7}
      />
      <div className='w-1/2'>
        <button className='bg-gray-300 px-6 py-1 font-semibold rounded text-xl'>Add Product</button>
      </div>
    </form>
  )
}

export default Create