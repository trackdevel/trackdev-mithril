import ModelBuilder from './modelBuilder';

const User = ModelBuilder('/users', 'User', {
    id: null,
    username: null,
    email: null,
    roles: []
});

export default User;
