const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//set terms for user object
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an e-mail address...']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        //link "fishtopics" chat feature to user
        fishTopics: [
            {
                type: Schema.Types.ObjectId,
                ref: 'FishTopic'
            }
        ],
        //link "vamptopic" chat feature to user
        vampTopics: [
            {
                type: Schema.Types.ObjectId,
                ref: 'VampTopic'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

//compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;