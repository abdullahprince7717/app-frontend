import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Carousel from "../components/carousel";
import Card from "../components/card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './css/homepage.css'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/products')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  console.log(data)

  return (

    <div>
    <Carousel/> 
    {data.map(product => (
    <div key={product.id} className="product-card">
      <Card title = {product.title} />
        
        {/* <div className="rating">{product.rating}</div>
        <h2>{product.title}</h2>
        <img className = "product_pic" src={product.picture.name} alt= "pic not found"/>
        <p>Content</p>
        <p>{product.price} </p>
        <Link to={`/details/${product.id}`}>Read more</Link> */}


    </div>
    ))}
    </div>
  )
    }