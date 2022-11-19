import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run () {
     await Fornecedor.createMany ([
      {nome:'Carlos', cnpj:'84.546.757/0001-71', uf:'SP', cidade:'Guarulhos'},
      {nome:'Laura', cnpj:'84.546.757/0001-72', uf:'DF', cidade:''},
      {nome:'Lucas', cnpj:'84.546.757/0001-73', uf:'SC', cidade:''},
      {nome:'Maria', cnpj:'84.546.757/0001-74', uf:'RN', cidade:'Natal'},
      {nome:'Pedro', cnpj:'84.546.757/0001-75', uf:'PR', cidade:'Londrina'},
      {nome:'Paulo', cnpj:'84.546.757/0001-88', uf:'MG', cidade:'Belo Horizonte'},
    ])
  }
}
