const { default: mongoose } = require('mongoose')

const connectToDB = async () => {
  const connectionURL = process.env.MONGODB_URL
  await mongoose
    .connect(connectionURL)
    .then(() => console.log('brainsight database connection is successfull'))
    .catch((error) => console.log('error is:', error))
}

export default connectToDB