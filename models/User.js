const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            //Validate the user email
            match: [/.+\@.+\..+/],
        },
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "User",
        //     },
        // ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        //_id: false,
    },
);
// Create the model with the schema
const User = model("User", UserSchema);

module.exports = User;
