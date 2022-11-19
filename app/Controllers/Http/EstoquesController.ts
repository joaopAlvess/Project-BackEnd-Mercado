// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Estoque from "App/Models/Estoque"
import EstoqueValidator from "App/Validators/EstoqueValidator"

export default class EstoquesController {

    index() {
        return Estoque.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(EstoqueValidator)
         return Estoque.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Estoque.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const estoque = await Estoque.findOrFail(id)

        return estoque.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const estoque = await Estoque.findOrFail(id)

        const dados = request.only([
            'nome', 
            'quantidade',
            'dataValidade'
        ])

        estoque.merge(dados)

        return estoque.save()

    }
}
