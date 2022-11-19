// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

export default class ProdutosController {

    index() {
        return Produto.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(ProdutoValidator)
         return Produto.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Produto.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const produto = await Produto.findOrFail(id)

        return produto.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const produto = await Produto.findOrFail(id)

        const dados = request.only([
            'nome',
            'valor',
            'dataValidade',
            'categoriaId',
            'estoqueId',
        ])

        produto.merge(dados)

        return produto.save()

    }
}
