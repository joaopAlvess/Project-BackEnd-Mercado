import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
     await Pedido.createMany ([
      {data: new Date(2022-12-11), status:'P', valor:'109.99', quantidade:'3', clienteId: 2, produtoID: 3},
      {data: new Date(2022-12-10), status:'A', valor:'119.99', quantidade:'4', clienteId: 1, produtoID: 5},
      {data: new Date(2022-12-9), status:'N', valor:'129.99', quantidade:'5', clienteId: 3, produtoID: 4},
      {data: new Date(2022-12-12), status:'A', valor:'139.99', quantidade:'6', clienteId: 4, produtoID: 2},
      {data: new Date(2022-12-13), status:'P', valor:'149.99', quantidade:'7', clienteId: 5, produtoID: 1},
    ])
  }
}
