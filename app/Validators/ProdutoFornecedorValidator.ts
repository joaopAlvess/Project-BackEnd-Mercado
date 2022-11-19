import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoFornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    produtoId: schema.number([
      rules.exists({ table: 'produtos', column: 'id'})
    ]),
    fornecedorId: schema.number([
      rules.exists({ table: 'fornecedors', column: 'id'})
    ]),
  })

  
  public messages: CustomMessages = {}
}
