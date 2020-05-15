import {Base} from './'

class User extends Base {

    static get tableName() {
        return 'sf_guard_user';
    }

}

export {User}