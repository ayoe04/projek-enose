// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     addKeluhan = async (body) => {
          try {
               const schema = Joi.object({
                    sensor1: Joi.number().required(),
                    sensor2: Joi.number().required(),
                    sensor3: Joi.number().required(),
                    sensor4: Joi.number().required(),
                    sensor5: Joi.number().required(),
                    sensor6: Joi.number().required(),
               })

               const validation = schema.validate(body)

               if(validation.error) {
                    const errorDetails = validation.error.details.map(detail => detail.message)
                    
                    return {
                         status: false,
                         code: 422,
                         error: errorDetails.join(", ")
                    }
               }
          
               const add = await mysql.query(
                    "INSERT INTO sensor(sensor1, sensor2, sensor3, sensor4, sensor5, sensor6) VALUES (?, ?, ?, ?, ?, ?)",
                    // "INSERT INTO tes(sensor_1, sensor_2) VALUES (?, ?)",

                    [body.sensor1, body.sensor2, body.sensor3, body.sensor4, body.sensor5, body.sensor6]
               )
               return{
                    status : true,
                    data: add
               }

          } catch (error) {
               console.error("addKeluhan todo module Error: ", error)

               return {
                    status: false,
                    error
               }

          }
     }

     listHasil = async () => {
          try {
              const list = await mysql.query(
                  'SELECT * FROM sensor',
                  []
              )
  
              return {
                  status: true,
                  data: list
              }
          } catch (error) {
              console.error('listHasil user module Error ', error)
  
              return {
                  status: false,
                  error
              }
          }
      }

}

module.exports = new _blog()
     

