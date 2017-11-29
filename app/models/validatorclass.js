/*
* @Author: homeuser
* @Date:   2017-11-28 12:03:40
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 14:53:05
*/

const Vibration = require('Vibration')
const DURATION = 150// haptic feedback duration

class Validator {
	constructor() {
	}
}

Validator.prototype.isValidUsername = function (username) {
	if (username) {
		// string is not empty
		if (isNaN(username)) {
			// if not a number
			if (!/[~`!#$%\^&*+()=\-\[\]\\';,/{}|\\":<>\?]/g.test(username)) {
				// if no special characters
				if ((username.length <= 12) && (username.length >= 0)) {
					// if between 6 and 12 characters
					console.log("User entered '" + username + "'");
					return true
				} else {
					Vibration.vibrate(DURATION)
					alert("Must be between 1 and 12 characters")
					return false
				}
			} else {
				Vibration.vibrate(DURATION)
				alert("No special characters allowed")
				return false
			}
		} else {
			Vibration.vibrate(DURATION)
			alert("Username cannot be a number")
			return false
		}
	} else {
		return false
	}
	console.log("Username entered '" + username + "'")
}

Validator.prototype.isValidPassword = function (password) {
	// password validator
	console.log("Password entered '" + password + "'")
	return true
}

// export class
module.exports = Validator