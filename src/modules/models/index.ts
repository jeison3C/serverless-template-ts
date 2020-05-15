import db from '../db'
import {Model} from "objection";

Model.knex(db);

export { Model }
export {Base} from './base'
export {User} from './user'

