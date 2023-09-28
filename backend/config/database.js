const mongoose=require('mongoose')
exports.connect=async ()=>{
    try {
        // console.log(process.env.DB_URL)
        const data=await mongoose.connect(process.env.DB_URL,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log(`mongodb connected with the server ${data.connection.host}`)
        } 
    catch (error) {
      console.log(error)   
    }
}