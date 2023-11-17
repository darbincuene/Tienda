import { useContext } from "react";
import { CartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(CartContext);

  // function to save a selected product
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }


    return (
      <div 
    className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={() => showProduct(data.data)}>
        <figure className="relative mb-2 w-full h-full">
          <span className="absolute bottom-0 left-0 bg-slate-500 rounded-lg text-black text-xs m-2  px-3 py-0.5">
            {data.data.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={data.data.photo}
            alt=""
            srcset=""
          />
          
     
        </figure>
        {showProduct &&(showProduct)}
    
      </div>
    );
  };
  
  export default Card;