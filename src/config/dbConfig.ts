import mongoose from 'mongoose';

export async function connectDB() {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('Mongodb connected successfully');
    });
    connection.on('error', (err) => {
      console.log('Mongodb connected error', err);
    });
  } catch (error) {
    console.log(error);
  }
}
