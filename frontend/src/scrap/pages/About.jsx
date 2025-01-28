import React from 'react'
import Header from '../Header'
import Layout from '../Layout'
import '../../css/about.css'

function About() {
  return (
    <Layout>
      <Header/>
      <div className="aboutContainer">
        <h1>Who We Are</h1>
        <p>
          Welcome to <span style={{color:'rgb(137, 237, 189)'}}>ScrapItNow</span> – your trusted partner in sustainable recycling!
        <br /><br />
        We specialize in the collection of <span style={{fontWeight:'bold'}}>metals, used, and scrapped electronic items and other scraps like books and plastic bottles</span>  to give them a new lease on life. By responsibly recycling these materials, we aim to reduce waste and contribute to a cleaner, greener planet.
        <br /><br />
        Here’s how we work:
        <br /><br />
        <span className="bold">Collect:</span> We pick up your unwanted metals and electronics directly from your location.
        <br /><br />
        
        <span className="bold">Pay:</span> Get instant cash for your scrap – transparent and fair pricing guaranteed.
        <br /><br />
        
        <span className="bold">Recycle:</span> Every item we collect is processed responsibly to minimize environmental impact.
        <br /><br />
        
        Join us in our mission to make recycling easy and rewarding for everyone. Together, let’s build a sustainable future!
        <br /><br />
        Let us turn your scrap into a step toward saving the planet. Contact us today!
        </p>
        <h1>Why You Need Us</h1>
        <p>
          In today's world, many customers are <span className='bold'>underpaid for their scraps</span> by local collectors. It's a common <span className="bold">issue—unfair</span> pricing and lack of transparency leave people feeling cheated. Worse yet, dealing with unverified collectors can lead to <span className="bold">theft and security concerns.</span>
          <br />
          <br />
          <span className="bold">That’s where we come in!</span>
          <br />
          <br />
          <span className="bold">Fair Pricing</span> We ensure you get the right value for your metals and electronic scraps. No hidden tricks—just transparent, market-based rates.
          <br /><br />
          
          <span className="bold">Secure Transactions:</span> Our professional team ensures your safety and peace of mind during every collection.
          <br /><br />
          
          <span className="bold">Sustainable Recycling:</span> We don’t just collect scrap—we recycle it responsibly, helping protect the environment for future generations.
          <br /><br />
          
          Say goodbye to unreliable local scrap collectors. <span className="bold">Choose us for a hassle-free, secure, and rewarding experience.</span> Let's turn your scrap into value you deserve!
        </p>
      </div>
    </Layout>
  )
}

export default About