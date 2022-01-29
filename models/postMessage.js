import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    candidateName: String,
    candidateEmail: String,
    status: String,
    UserEmail: String,
    joiningLink: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;