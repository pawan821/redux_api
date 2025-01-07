import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from './Context';

const Detail = () => {
    const { id } = useParams();
    const [products ] = useContext(UserContext);
    console.log(products);
    const navigate = useNavigate();

    // if (!product || product.length === 0) {
    //     return <div>Products not found</div>;
    //   }



    const item = products.find(p => p.title === id); 
  console.log(item);

    //   if (!item) {
    //     return <div>Product with title "{id}" not found</div>;
    //   }

    if (!products) {
        return <div>product not found</div>
    }

    return (
        <div className='flex items-center flex-col w-full'>
            <div className='mb-5 w-full px-10 flex justify-between items-center'>
                <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => navigate(-1)}>Backward</button>
                <h1 className='text-4xl mt-4 font-extrabold cursor-default'>Product Detail</h1>
                <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => navigate(+1)}>Forward</button>
            </div>
            <div className='my-5 p-3 bg-zinc-300 flex'>
                <div className=' p-2'>
                    <img
                        className=' h-[400px]'
                        src={item.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Detail;