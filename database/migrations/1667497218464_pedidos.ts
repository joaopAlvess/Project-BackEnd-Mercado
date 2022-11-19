import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('data', { useTz: true }).notNullable()
      table.string('status', 1).notNullable()
      table.string('valor', 10).notNullable()
      table.string('quantidade', 10).notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
