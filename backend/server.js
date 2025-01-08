const express=require('express')
const cors=require('cors')
const app =express()
require('dotenv').config();
const nodemailer=require('nodemailer')

app.use(cors())
app.use(express.json());

const trasnspoter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }, 
}) 

app.get('/',(req,res)=>{
  res.send('Hello from server') 
}) 

app.post('/send-email',(req,res)=>{
  const {formData}=req.body
  const {name,email,message}=formData
  try {
    const mailOptions={
      from:email,
      to:process.env.EMAIL,
      subject:`message from ${name}`,
      text: `You have received a message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    }

    trasnspoter.sendMail(mailOptions)
    res.status(200).send({
      success:true,
      message:'Email sent successfully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error sending email'
    })
  }
  
})

const port=process.env.PORT || 5000

app.listen(port,()=>{
  console.log('server is running at port ',port);
})