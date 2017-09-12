/**
 * Created by jolaadeadewale on 11/09/2017.
 */
import bcrypt from 'bcrypt-nodejs';
import userModel from '../model/user';
import email from '../services/email';

class User {

    create = (req, res) => {
        let userSchema = userModel.model(req.body);
        userSchema.save((err, data) => {
            if (err) {
                console.log('error');
                return;
            }
            email.sendEmail(req.body.email);

            res.status(201).json({'message': 'user created' + data});

        });
    };


    login = (req, res) => {

        const userSchema = userModel.model;
        userSchema.findOne({username: req.body.username})
            .populate('bet')
            .exec((err, userData) => {
            if (err) {
                console.log(err);
                return console.error(err);
            }
            if (userData) {
                bcrypt.compare(req.body.password, userData.password, (err, data) => {
                    if (data) {
                        res.status(200).json({
                            'message': {'response': 'user logged in', user: userData}
                        });
                    } else {
                        res.status(200).json({'message': {'response': 'Invalid Username or password'}});
                    }
                });
            }
            else {
                res.status(200).json({'message': {'response': 'Invalid Username or password'}});
            }
        })
    };

    findAllUsers = (req, res) => {
        const userSchema = userModel.model;

        userSchema.find({}).populate('bet')
            .exec((err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                res.status(200).json({'data': data});
            })
    };
}


export default User;