import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriaValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    categoriaProd: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(20),
      rules.alpha(),
    ]),
  })
    
  
  public messages: CustomMessages = {}
}
