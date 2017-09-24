/**
 * Created by jolaadeadewale on 24/09/2017.
 */
import mongoose from 'mongoose';

function picks() {

    const PickSchema = mongoose.Schema({
        bets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bet'}],
        price: {type: String, required: true},
        title: {type: String, required: true},
        scheduled: {type: String, required: true},
        result: {type: String,  enum: ['successful', 'notsuccessful', 'pending']},
        type: {type: String,  enum: ['free', 'premium']},
        analysis: {type: String}
    });

    const pick = mongoose.model('Picks', PickSchema);

    return {
        model: pick
    }
}

export default picks();