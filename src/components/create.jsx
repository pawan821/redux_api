import React from 'react'

const Create = () => {
    const [title, settitle] = useState('');
  return (
    <form className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>
        <input 
        type='text' 
        value={title}
        placeholder='Title' 
        className='w-1/2 p-2 my-2 border-2 border-gray-400 rounded' 
        onChange={(e) => settitle(e.target.value)}/>
    </form>
  )
}

export default Create