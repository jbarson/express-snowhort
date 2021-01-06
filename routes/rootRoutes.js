const express = require('express')
const router = express.Router()

const arrayOfValues = [1,2,3,45,6]
router.route('/')
  .get((req, res) => {
    res.status(200).send({value: arrayOfValues})
  })
  .post((req, res) => { 
    console.log(req.body)
    if (!req.body.message) {
      return res.status(418).json({reply: "add a message property, moron"})
    }
    arrayOfValues.push(req.body.message)
    return  res.status(200).send({value: arrayOfValues})
  })

module.exports = router