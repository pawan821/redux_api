import React from 'react'
import { useParams } from 'react-router-dom'

const Loding = () => {
    const {id} = useParams();
   const [productimg, setproductimg] = useState([]);

   const getimg = async () => {
    try {
        const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
        console.log(data);
        setproductimg(data);
    } 
    catch (error) {
        console.log(error);
    }   
   }
  return (
    <div>
        {id}
    </div>
  )
}

export default Loding