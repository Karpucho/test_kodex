/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Singers', [
      {
        name: 'Кровосток',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cannibal Corpse',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sodom',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Songs', [
      {
        singer_id: 1,
        name: 'Биография',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 1,
        name: 'Куртец',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 1,
        name: 'Чебурашка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 2,
        name: 'Meat Hook Sodomy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 2,
        name: 'I Cum Blood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 2,
        name: 'Necropedophile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 3,
        name: 'Masquerade in Blood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 3,
        name: 'Braindead',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        singer_id: 3,
        name: 'Scum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Songs', null, {});
    await queryInterface.bulkDelete('Singers', null, {});
  },
};
