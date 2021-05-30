const express = require('express')
const router = express.Router()
const Messages = require('../model/Messages')

router.post('/new', (req, res) => {
  const dbMessage = req.body

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send('mistake')
    } else {
      res.status(201).send(`New message created: \n ${data}`)
    }
  })
})

router.get('/sync', (req, res) => {
    
    Messages.find((err, data)=> {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
            
        }
  })
})
router.delete('/sync', (req, res) => {

  const deletion = req.body
  Messages.deleteMany(deletion,(err, data)=> {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
            
        }
  })
})




module.exports = router
