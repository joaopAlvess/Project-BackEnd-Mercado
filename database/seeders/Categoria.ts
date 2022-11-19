import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'

export default class extends BaseSeeder {
  public async run () {
     await Categoria.createMany([
      {categoriaProd: 'Padaria'},
      {categoriaProd: 'Cereais'},
      {categoriaProd: 'Grãos'},
      {categoriaProd: 'Frios'},
      {categoriaProd: 'Frutas'},
      {categoriaProd: 'Vegetais'},
      {categoriaProd: 'Bebidas'},
      {categoriaProd: 'Limpeza'}
    ])
  }
}
