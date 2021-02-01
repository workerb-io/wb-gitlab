// @description Get options for gitlab package
import { token } from '../utils/constants'

const returnOptions = () => {
	if (!token) {
		return JSON.stringify({
			remove: ['groups'],
		})
	}
	return JSON.stringify({
		remove: ['setup'],
	})
}

export default returnOptions
