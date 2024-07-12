const users = [];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const createUser = (user) => {
    users.push(user);
    return user;
};

const updateUser = (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    }
    return null;
};

const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1);
    }
    return null;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
