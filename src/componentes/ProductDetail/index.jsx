import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css'


const ProductDetail = () => {
    const context = useContext(CartContext);

  
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6 bac'>
                <h2 className='font-medium text-xl detalle'>Detalle</h2>
                <div onClick={() => context.closeProductDetail() }>x</div>
            </div>
            <figure className='px-6 bac'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.photo} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6 bac'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.name}</span>
                <span className='font-medium text-md'>${context.productToShow.size}</span>
                <span className='font-light text-sm'>${context.productToShow.color}</span>
                <span className='font-light text-sm'>${context.productToShow.price}</span>
            </p>
        </aside>
    )
}
export default ProductDetail