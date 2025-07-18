const getCurrentUserId = async () => {
	const response = await api('o/headless-admin-user/v1.0/my-user-account');
	const data = await response.json();
	return data.id;
};