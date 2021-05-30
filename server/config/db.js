require('dotenv').config()
const mongoose = require('mongoose')
const Pusher = require('pusher')

//  ! pusher

const pusher = new Pusher({
    appId: '1211609',
    key: '23db6c53bbd0369ad718',
    secret: '1e7851ca2b2b5403a8a1',
    cluster: 'us2',
    useTLS: true
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected successfully')

        const db = mongoose.connection
        const msgCollection = db.collection('messages')
        const changeStream = msgCollection.watch()
        changeStream.on('change', change => {
            console.log(change)
            if (change.operationType === 'insert') {
                const messageDetails = change.fullDocument
                pusher.trigger('messages', 'inserted', {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp: messageDetails.timestamp,
                    received: messageDetails.received,
                })
            } else {
                console.log("Pusher trigger encountered error")
            }
        })
        // db.once('open', () => {
        //     console.log('Database connected')
        //     })
        // })
    } catch (error) {
        console.log('MongoDB connection failed')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
