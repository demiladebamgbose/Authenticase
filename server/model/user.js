/**
 * Created by jolaadeadewale on 11/09/2017.
 */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

function user() {

    const UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        name: {
            firstName:{type: String, required: true},
            lastName: {type: String, required: true}
        },
        password: {type: String, required: true},
        email:{type: String, unique: true, required: true},
        profilePicture: {type: String},
        watchers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        bet: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bets'}],
        userType: {type: String,  enum: ['Handicapper', 'Bettor']},
        company: {type: String},
        phoneNumber: {type: Number},
        dob: {type: Date, required: true},
        verify: {type: Boolean, default: false}
    });

    UserSchema.pre('save', function (next) {
        this.password = bcrypt.hashSync(this.password);
        next();
    });

    const user = mongoose.model('User', UserSchema);

    return {
        model: user
    }
}

export default user();