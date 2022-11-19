import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alphaNum(),
    ]),
    valor: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(10),
    ]),
    dataValidade: schema.date(),
    categoriaId: schema.number([
      rules.exists({ table: 'categorias', column: 'id'})
    ]),
    estoqueId: schema.number([
      rules.exists({ table: 'estoques', column: 'id'})
    ]),
  })

 
  public messages: CustomMessages = {}
}
