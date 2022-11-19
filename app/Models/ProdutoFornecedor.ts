import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProdutoFornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public produtoId: number

  @column()
  public fornecedorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
