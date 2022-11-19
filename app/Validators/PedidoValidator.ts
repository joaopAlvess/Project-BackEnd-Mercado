import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    data: schema.date(),
    status: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(1),
      rules.alpha(),
    ]),
    valor: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ]),
    quantidade: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ]),
    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id'})
    ]),
    produtoId: schema.number([
      rules.exists({ table: 'produtos', column: 'id'})
    ]),
  })

 
  public messages: CustomMessages = {}
}
