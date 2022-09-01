'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('User', [{
    first_name: 'Tobey',
    last_name: 'Mcgueire',
    bio: 'Spiderman',
    createdAt: new Date(),
    updatedAt: new Date(),
    phone: '13400021',
    email: 'spideyTobey@gmail.com'
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('User', [{
      first_name: 'Tobey'
    }], {});
  }
};
