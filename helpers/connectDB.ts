import mongoose from 'mongoose'
mongoose.set('strictQuery', false);
const URI = process.env.MONGODB_URI || ""

const connectToDatabase = async() => {
   
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        return;
    }

 mongoose.connect(URI,err => {
        console.log('Connecting to mongodb.')
        if(err) throw err;
        console.log('Connected to mongodb.')
    })
}


export default connectToDatabase