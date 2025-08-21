export function request(path: string, method: string = 'GET', body?: any) {
	return fetch(path, {
		body,
		headers: {
			'accept': 'application/json',
			'content-Type': 'application/json',
			'x-csrf-token': Liferay.authToken,
		},
		method,
	});
}