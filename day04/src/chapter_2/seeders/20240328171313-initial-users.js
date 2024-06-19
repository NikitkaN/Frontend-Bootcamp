'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John N.I.',
        orders: [1, 2, 3],
        role: 'Chief',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alex A.N.',
        orders: [4, 5],
        role: 'Su-Chief',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
