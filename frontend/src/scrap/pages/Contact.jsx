import React, { useState } from 'react'
import Header from '../Header'
import Layout from '../Layout'
import '../../css/contact.css'
import toast from 'react-hot-toast'
import {axiosInstance} from '../../axios/Axios'

function Contact() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
    
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const {data}=await axiosInstance.post('/send-email',{formData})
      if(data.success){
        toast.success(data.message)
        setFormData({name:'',email:'',message:''})
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)  
    }
  } 
  return (
    <Layout>
      <Header/>
      <div className="contactContainer">
        <div className="formContainer">
        <div className="leftSection">
        <h1>Get  In Touch</h1>
        <p>Feel free to drop a line below</p>

        <div className="inputBox">
          <div className="inputGroup">
            <label htmlFor="">Your Name</label>
            <input onChange={handleChange} value={formData.name} type="text" name="name" id="" />
          </div>
          <div className="inputGroup">
            <label htmlFor="">Your Email</label>
            <input onChange={handleChange} value={formData.email} type="text" name="email" id="" />
          </div>
          <div className="inputGroup">
            <label htmlFor="">Your Message</label>
            <textarea onChange={handleChange} value={formData.message} type="text" name="message" id="" />
          </div>
          <div className="inputGroup">
            <button type="button" onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Contact