import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Estoque from './Estoque'
import Fornecedor from './Fornecedor'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public nome: string

  @column()
  public valor: string

  @column()
  public dataValidade: Date

  @column()
  public categoriaID: number

  @column()
  public estoqueID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Categoria)
  public categoria: BelongsTo<typeof Categoria>

  @belongsTo(()=>Estoque)
  public estoque: BelongsTo<typeof Estoque>

  @manyToMany(() => Fornecedor)
  public fornecedors: ManyToMany<typeof Fornecedor>
}
