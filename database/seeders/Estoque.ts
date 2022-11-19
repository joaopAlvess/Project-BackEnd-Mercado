import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estoque from 'App/Models/Estoque'

export default class extends BaseSeeder {
  public async run () {
     await Estoque.createMany ([
      {nome:'Arroz', quantidade: '25', dataValidade: new Date(2023-2-2)},
      {nome:'Detergente', quantidade: '11', dataValidade: new Date(2023-3-3)},
      {nome:'Frango', quantidade: '25', dataValidade: new Date(2023-4-2)},
      {nome:'Óleo', quantidade: '8', dataValidade: new Date(2023-5-4)},
      {nome:'Vinho', quantidade: '33', dataValidade: new Date(2023-2-3)}
    ])
  }
}
