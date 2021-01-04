import { token, store } from '../utils/constants';

if (token) {
	notify('Access token .' + token, 'success', 3000)
	setVars([
		{
			name: 'GITLAB_PERSONAL_TOKEN',
			value: '',
		},
	], { local: true })

	notify('Access token removed successfully.', 'success', 3000)
	reIndex()
}
else {
	notify('Access token is null....' + token, 'success', 3000)
	reIndex()
}


