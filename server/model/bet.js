/**
 * Created by jolaadeadewale on 11/09/2017.
 */
import mongoose from 'mongoose';

function bet() {
    const UserSchema = mongoose.Schema({
        title: {type: String, required: true},
        selection: {type: String},
        location: {type: String},
        score: {type: String},
        result: {type: String,  enum: ['successful', 'notsuccessful', 'pending']},
        pictures: [{type: String}],
        category: {type: String},
        analysis: {type: String},
        author: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        company: {type: String},
    },{
        timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    });

    const bet = mongoose.model('Bet', UserSchema);

    return {
        model: bet
    }
}

export default bet();