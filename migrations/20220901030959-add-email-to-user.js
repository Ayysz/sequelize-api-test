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
      queryInterface.addColumn( 'User', 'email', {
        type: Sequelize.STRING,
        after: 'bio'
      }),
      queryInterface.addColumn( 'User', 'phone', {
        type: Sequelize.STRING,
        after: 'email'
      }),
      queryInterface.addColumn( 'Task', 'userId', {
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          defaultValue: null,
      })
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
