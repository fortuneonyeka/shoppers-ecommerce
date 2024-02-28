import React, { useEffect, useState } from 'react'
import {useLoaderData} from "react-router-dom"
import Banner from '../components/Banner'
import Products from '../components/Products'

const Home = () => {
  

  return (
    <div className=''>
      <Banner />
      <Products />
    </div>
  )
}

export default Home