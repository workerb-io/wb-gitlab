import { token } from '../utils/constants'

const returnOptions = () => {
	if (!token) {
		return JSON.stringify({
			remove: ['projects', 'remove_token'],
		})
	}
	return JSON.stringify({
		remove: ['setup'],
	})
}

export default returnOptions
