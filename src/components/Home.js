import React from 'react'
import Slider from './Slider'
import HomeInfoBox from './HomeInfoBox'
import "./Home.scss"
import { productData } from './data'
import Carousel from 'react-multi-carousel'
import CarouselItem from './CarouselItem'
import ProductCarousel from './Carousel'
import ProductCategory from './ProductCategory'


const PageHeading = ({heading,btnText}) =>{

     return(
      <>
      <div className="--flex-between">
        <h2 className='--fw-thin'>{heading}</h2>
        <button className='--btn'>
          {btnText}
        </button>
        </div>
        <div className="--hr"></div>
      </>

     )
}
function Home() {
  const productss = productData.map((item)=>(
    <div key={item.id}>
        <CarouselItem 
          name={item.name}
          url ={item.imageurl}
          price = {item.price}
          description={item.description}
        />
    </div>
  ))
  return (
    <>
    <Slider/>
    <section>
      <div className='container'>
        <HomeInfoBox/>
        <PageHeading heading={"Latest Products"} btnText={"Shop Now"}/>
        <ProductCarousel products={productss}/>
      </div>
    </section>
    <section className='--bg-grey'>
      <div className='container'>
        <h3>Categories</h3>
        <ProductCategory />
      </div>
    </section>
    <section>
      <div className='container'>
        <PageHeading heading={"Mobile Phones"} btnText={"Shop Now"}/>
        <ProductCarousel products={productss}/>
      </div>
    </section>
  
    </>
  )
}

export default Home