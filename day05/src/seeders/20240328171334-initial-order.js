'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        isActive: true,
        items: [1, 2, 3],
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        isActive: true,
        items: [4, 5],
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
