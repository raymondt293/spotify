import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: { // sender's clerkId
        type: String,
        required: true,
    },
    receiverId: { // receiver's clerkId
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Message = mongoose.model('Message', messageSchema);