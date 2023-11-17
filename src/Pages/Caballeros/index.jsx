
import { useState, useEffect } from "react"
import Layout from "../../componentes/Layout"
import Card from "../../componentes/Card"
import React from "react"
import ProductDetail from "../../componentes/ProductDetail"

const Caballeros = () =>{
    const [items, setItems] = useState (null) 
useEffect(()=>{
fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Shirt/')
.then(respu=> respu.json())
.then(data => setItems(data))
}
)
return(
    <Layout>
   <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg '>
            {
                items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }

        </div>
        <ProductDetail/>
</Layout>
)
}
export default Caballeros
