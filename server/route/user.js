/**
 * Created by jolaadeadewale on 11/09/2017.
 */
import User from '../controller/user';

export default function userRoute(app) {
    const user = new User();

    app.route('/api/v1/users').post(user.create);

    app.route('/api/v1/users/login').post(user.login);

    app.route('/api/v1/users').get(user.findAllUsers);

}