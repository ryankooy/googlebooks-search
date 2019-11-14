import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  authors: [String],
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
