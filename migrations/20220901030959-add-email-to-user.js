'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      queryInterface.addColumn( 'User', 'email', Sequelize.STRING),
      queryInterface.addColumn( 'User', 'phone', Sequelize.STRING)
    ]
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [
      queryInterface.removeColumn( 'User', 'email'),
      queryInterface.removeColumn( 'User', 'phone')
    ]
      
  }
};
