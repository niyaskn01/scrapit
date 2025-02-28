import React, { useState } from 'react'
import Header from '../Header'
import Layout from '../Layout'
import '../../css/contact.css'
import toast from 'react-hot-toast'

function Contact() {
  
  const [loading ,setLoading]=useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
  
    if (loading) return; // Prevent multiple submissions
  
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "504fd9c3-c1e8-4107-90e3-6b45efb12f8d");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const res = await response.json();
  
      if (res.success) {
        console.log("Success", res);
        toast.success('Email send')
        event.target.reset();
      } else {
        console.error("Error:", res);
      toast.error('Error')

   }
    } catch (error) {
      console.error("Request failed:", error);
      toast.error('Request failed:')
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <Header/>
      <div className="contactContainer">
        <div className="formContainer">
        <div className="leftSection">
        <h1>Get  In Touch</h1>
        <p>Feel free to drop a line below</p>
      <form onSubmit={onSubmit}>
        <div className="inputBox">
          <div className="inputGroup">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="">Your Email</label>
            <input type="text" name="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="">Your Message</label>
            <textarea type="text" name="message"  />
          </div>
          <div className="inputGroup">
            <button>
              {loading?"sending":'Send Message'}
            </button>
          </div>
          
        </div>
        </form>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Contact