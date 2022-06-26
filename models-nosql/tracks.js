const mongoose = require('mongoose');

const TrakcScheme = new mongoose.Schema(
  {
    name: {type:String},
    album: {type:String},
    cover: {
      type:String,
      validate: {
        validator : () => {
            return true;
        },
        message: "ERROR_URL"
      },
    },
    artista: {
      name: {type:String},
      nickname: {type:String},
      nationality:{type: String}
    },
    duration: {
      start: {type: Number},
      end: {type: Number}
    },
  mediaId: {type: mongoose.Types.ObjectId}
  },
  {
    timestamps:true, //TODO createAt, updatedAt
    versionKey: false
  }
);

module.exports = mongoose.model("tracks", TrakcScheme);
