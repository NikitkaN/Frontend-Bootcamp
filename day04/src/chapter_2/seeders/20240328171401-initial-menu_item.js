'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const orders = await queryInterface.sequelize.query(
      'SELECT id FROM "Orders";',
    );

    const orderRows = orders[0];

    await queryInterface.bulkInsert('MenuItems', [
      {
        OrderId: orderRows[0].id,
        title: 'Pizza',
        picture: 'Pizza.jpg',
        cost: 12,
        callQuantity: 5,
        description: 'Pizza is an Italian food that was created in Italy.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: orderRows[1].id,
        title: 'Borscht',
        picture: 'Borscht.jpg',
        cost: 21,
        callQuantity: 9,
        description: 'It is a very popular and widely known dish in Russian cuisine.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MenuItems', null, {});
  }
};
