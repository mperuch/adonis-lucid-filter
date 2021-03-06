'use strict'

/*
 * adonis-lucid-filter
 *
 * (c) Lookin Anton <lookin@lookinlab.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Model = use('Model')
const User = require('./User')

class Industry extends Model {
  users () {
    return this.belongsToMany(User)
  }
}

module.exports = Industry
