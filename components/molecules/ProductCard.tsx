import React from 'react'
import Image from 'next/image'
type Product = {
  name: string,
  image: string,
  category: string
}

function ProductCard({ name, image, category }: Product) {
  return (
    <div className=" bg-yellow-200 bg-opacity-25 shadow-lg backdrop-filter backdrop-blur-lg border-1 border-white border-opacity-18 rounded-[1rem]  p-10 min-h-[22rem] max-h-[22rem] m-5 max-w-[18rem] min-w-[18rem]">
      <Image src={image} alt={name} width={150} className='mx-auto' />
      <h6 className='text-[484848]'><b>{name}</b></h6>
      {/* <small className='text-[484848]'>{category}</small> */}
    </div>
  )
}

export default ProductCard