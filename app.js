const express = require('express')
const path = require('path')
const app =  express()
app.use(express.json());
app.post('/register',(request,response)=>{
    const {email,name,password}=request.body
    if (email === undefined || name === undefined || password===undefined) {
        response.send('all fields are mandatory')

    } else{
        response.status(201).json({ message: 'Registration successful!' });

    }
})
app.listen(3008,()=>{
    console.log('Server Running at http://localhost:3008/');

})
        
            