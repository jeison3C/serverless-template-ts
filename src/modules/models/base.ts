import {Model} from './';
import moment from 'moment-timezone';

class Base extends Model {
    created_at: string
    created_by: number
    updated_at: string
    update_by: string
    deleted_by: string

    $beforeInsert() {
        this.created_at = moment().tz("America/Bogota").format('YYYY-MM-DD HH:mm:ss')
    }

    $beforeUpdate() {
        this.updated_at = moment().tz("America/Bogota").format('YYYY-MM-DD HH:mm:ss')
    }
}

export { Base }