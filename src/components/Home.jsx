import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from './Context';

const Home = () => {
    const [products, loading] = useContext(UserContext);
    console.log(' products:', products);

    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredproducts, setFilteredproducts] = useState(null);
    console.log(' filter:', filteredproducts);

    const getProductByCategory = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setFilteredproducts(data);
            console.log('filtered products:', data);
        } catch (error) {
            console.log('Error fetching products:', error);
        }

    };

    useEffect(() => {
        if (!filteredproducts) setFilteredproducts(products);
        if (category != 'undefined') getProductByCategory();
    }, [category, products]);


    if (loading) {
        return (
            <div className='flex justify-center items-center w-screen h-screen'>
                <h1 className='text-center my-5 text-3xl font-bold'>Loading...</h1>
            </div>
        );
    }

    if (!filteredproducts || filteredproducts.length === 0) {
        return (
            <div className='flex justify-center items-center w-screen h-screen'>
                <h1 className='text-center my-5 text-3xl font-bold'>No products found</h1>
            </div>
        );
    }

    return (
        <div className='w-full overflow-y-auto flex flex-wrap bg-zinc-400'>
            {filteredproducts && filteredproducts.map((p) => (
                <Link className='w-[18%] m-2 border border-black' key={p.id} to={`/detail/${p.title}`}>
                    <img className='h-[350px] object-center' src={p.image} alt={p.title} />
                </Link>
            ))}
        </div>
    );
};

export default Home;
