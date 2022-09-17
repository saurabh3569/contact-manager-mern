const express = require('express')
const router = express.Router()

const PhoneBook = require('../models/contact')

///////////////// ADD /////////////////

router.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){ 
        res.status(500).json({ 
            status: 'Failed',
            message : err.message
        })
    }
})


///////////////// Get /////////////////

router.get('/get-phone', async (req,res) => {
    try{
        const phoneNumbers = await PhoneBook.find()
        res.status(200).json(phoneNumbers)
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err.message
        })
    }
})


///////////////// Delete /////////////////

router.delete('/delete-phone/:id', async(req,res) => {
    const b = await PhoneBook.findById(req.params.id)
    
    
    try{
        
        if(b){

            const a = await PhoneBook.findByIdAndDelete(req.params.id)
            res.status(200).json(deleted)

        }
        else{
            res.status(200).json({
                status : 'not found',
                data : {
                  
                }
              })
        }
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err.message
        })
    }
})



module.exports = router
