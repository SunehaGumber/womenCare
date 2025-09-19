import React, { useState } from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import Details from './Details'
import { useNavigate } from 'react-router-dom'
const Tracker = () => {
    
    const [formData, setFormData] = useState(null);
    const [submitted, setSubmitted] = useState(false)

    const fetchData = (data) => {
        console.log(data, "in tracker");
        setFormData(data);
        setSubmitted(true);
    }
   
    return (
        <>
            <div className='bg-pink-50 w-full min-h-screen'>
                {/* <Navbar /> */}
                <div className='text-center mt-10'>
                    🌸 Track Your Cycle 🌸<br />
                    Log your period & stay prepared
                </div>
                {/*Form */}
                <Form onSubmitTracker={fetchData} />
                
                {submitted && formData &&Object.keys(formData).length > 0 && <Details formData={formData}/>}
            
          </div>
        </>
  )
}

export default Tracker