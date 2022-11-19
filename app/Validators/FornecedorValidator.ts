import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(45),
      rules.alpha(),
    ]),
    cnpj: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(30),
    ]),
    uf: schema.string.optional({}, [
      rules.minLength(2),
      rules.maxLength(2),
      rules.alpha(),
    ]),
    cidade: schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(25),
      rules.alphaNum(),
    ]),
    
  })

  
  public messages: CustomMessages = {}
}
