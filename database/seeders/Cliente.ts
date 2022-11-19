import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
     await Cliente.createMany ([
      {nome:'José', cpf: '123.456.789/11', telefone:'', email:'jose@gmail.com'},
      {nome:'Joana', cpf: '122.456.789/11', telefone:'(61) 99453-7832', email:'joana@gmail.com'},
      {nome:'Clara', cpf: '323.456.789/11', telefone:'(21) 99452-7832', email:'clara@gmail.com'},
      {nome:'Eduarda', cpf: '223.456.789/11', telefone:'(11) 99457-7832', email:'eduarda@gmail.com'},
      {nome:'Felipe', cpf: '423.456.789/11', telefone:'', email:''}
    ])  }
}
