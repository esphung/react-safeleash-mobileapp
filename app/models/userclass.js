/*
* @Author: homeuser
* @Date:   2017-11-28 02:27:44
* @Last Modified 2017-11-28r Name>
* @Last Modified time: 2017-11-28 02:27:53
*/

class User {
	constructor(user_id, email, username, password, phone, image_url) {
		this.user_id = Number(user_id)
		this.username = username
		this.email = email
		this.password = password
		this.phone = phone
		this.contact_ids = []
		this.image_url = image_url
	}// end constructor

}// end class def

// export class
module.exports = User
