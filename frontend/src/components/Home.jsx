import React from 'react'
import Card from './Card'
import CardSection from './CardSection'

const Home = () => {
  return (
      <>
          
              <div className='flex flex-col items-center justify-center gap-5'>  
                  <div className='mt-12 flex flex-col items-center'>
                    <h1>🌸 Caring for Women’s Health, Every Day 🌸</h1>  
                    <p>Track | Learn | Stay Healthy</p>
                  </div>
                  <CardSection/>
            </div>
      </>
  )
}

export default Home