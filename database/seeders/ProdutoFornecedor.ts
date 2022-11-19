import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoFornecedor from 'App/Models/ProdutoFornecedor'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoFornecedor.createMany ([
      {produtoId: 1, fornecedorId: 6},
      {produtoId: 5, fornecedorId: 5},
      {produtoId: 3, fornecedorId: 4},
      {produtoId: 2, fornecedorId: 3}
    ])
  }
}
