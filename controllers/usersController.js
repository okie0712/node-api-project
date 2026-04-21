let users = [
	{ id: 1, name: 'Brandon' },
	{ id: 2, name: 'User2' }
];

exports.getUsers = (req, res) => {
	res.json(users);
};

exports.getUserById = (req, res) => {
	const user = users.find((currentUser) => currentUser.id == req.params.id);

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	res.json(user);
};

exports.createUser = (req, res) => {
	const newUser = {
		id: users.length + 1,
		name: req.body.name
	};

	users.push(newUser);
	res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
	const user = users.find((currentUser) => currentUser.id == req.params.id);

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	user.name = req.body.name;
	res.json(user);
};

exports.deleteUser = (req, res) => {
	users = users.filter((currentUser) => currentUser.id != req.params.id);
	res.json({ message: 'User deleted' });
};
