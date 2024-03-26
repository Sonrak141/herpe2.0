import React from 'react'
import Image from 'next/image'
type Product = {
  name: string,
  image: string,
  category: string
}

function ProductCard({ name, image, category }: Product) {
  return (
    <div className=" bg-yellow-200 bg-opacity-25 shadow-lg backdrop-filter backdrop-blur-lg border-1 border-white border-opacity-18 rounded-[1rem]  p-10 md:min-h-[18rem] min-h-[20rem] md:max-h-[18rem] max-h-[20rem] m-5 max-w-[18rem] min-w-[18rem]">
      <Image src={image} alt={name} width={80} height={80} className='mx-auto w-auto h-auto' />
      <h6 className='text-[484848] mt-10'><b>{name}</b></h6>
      {/* <small className='text-[484848]'>{category}</small> */}
    </div>
  )
}

export default ProductCard