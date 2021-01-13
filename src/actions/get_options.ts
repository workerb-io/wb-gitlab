import { token } from '../utils/constants'

const returnOptions = () => {
	if (!token) {
		return JSON.stringify({
			remove: ['reset','groups', 'projects'],
		})
	}
	return JSON.stringify({
		remove: ['setup'],
	})
}

export default returnOptions