import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
     await Produto.createMany ([
      {nome: 'Detergente Brilho', valor:'2.99', dataValidade: new Date(2024-3-4),categoriaID: 8, estoqueID: 2},
      {nome: 'Vinho Bourbon la Chapelle', valor:'199.99', dataValidade: new Date(2028-3-4),categoriaID: 7, estoqueID: 5},
      {nome: 'Frango Congelado', valor:'8.99', dataValidade: new Date(2023-2-4),categoriaID: 4, estoqueID: 3},
      {nome: 'Óleo Soja', valor:'7.99', dataValidade: new Date(2023-4-4),categoriaID: 2, estoqueID: 4},
      {nome: 'Arroz Tio João', valor:'19.99', dataValidade: new Date(2023-3-4),categoriaID: 3, estoqueID: 1},
    ])
  }
}
