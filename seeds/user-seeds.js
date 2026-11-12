const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'password123'

    },
    {
        username: 'Jake',
        password: 'password123'
    },
    {
        username: 'Joe',
        password: 'password123'
    }
];

// individualHooks runs the beforeCreate hook so seeded passwords are hashed
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, validate: true });

module.exports = seedUsers;