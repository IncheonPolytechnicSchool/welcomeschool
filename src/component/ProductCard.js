import React from 'react';
import { useNavigate } from "react-router-dom" ;

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail=()=>{
        navigate( `/product/${item.id}`);

    };
  return (
    <div className="card" onClick ={showDetail}>
        <img
        src={item?.img}/>
        <div>{item?.title}</div>
        <div>{item?.titleEng}</div>
    </div>
  )
}

export default ProductCard