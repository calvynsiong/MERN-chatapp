const connectDB = require("./config/db") 
const Messages = require("./model/Messages") 

connectDB()

const deleteData = async () => {
  try {
    // ! Clears database
    await Messages.deleteMany({})
    // ! Inserts database
   
  } catch (error) {
    console.log(error)
    console.log('Data was not deleted. Process failed')
    process.exit(1)
  }
}

deleteData()
