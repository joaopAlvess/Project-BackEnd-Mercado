import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(100),
      rules.alpha(),
    ]),
    cpf: schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(15),
    ]),
    telefone: schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(15),
      
    ]),
    email: schema.string.optional({}, [
      rules.email(),
      rules.minLength(1),
      rules.maxLength(100),
    ]),

  })

 
  public messages: CustomMessages = {}
}
