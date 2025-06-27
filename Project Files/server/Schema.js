export const messageSchema = {
  senderId: String,
  text: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
};

export const chatSchema = {
  participants: [String],
  messages: [messageSchema],
};
