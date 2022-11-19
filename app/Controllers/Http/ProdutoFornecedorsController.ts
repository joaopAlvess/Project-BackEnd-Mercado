// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProdutoFornecedor from "App/Models/ProdutoFornecedor"
import ProdutoFornecedorValidator from "App/Validators/ProdutoFornecedorValidator"

export default class ProdutoFornecedorsController {

    index() {
        return ProdutoFornecedor.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(ProdutoFornecedorValidator)
         return ProdutoFornecedor.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return ProdutoFornecedor.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const produtoFornecedor = await ProdutoFornecedor.findOrFail(id)

        return produtoFornecedor.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const produtoFornecedor = await ProdutoFornecedor.findOrFail(id)

        const dados = request.only([
            'produtoId', 
            'fornecedorId'
        ])

        produtoFornecedor.merge(dados)

        return produtoFornecedor.save()

    }
}
