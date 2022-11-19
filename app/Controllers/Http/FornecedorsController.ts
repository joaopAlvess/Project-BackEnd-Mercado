// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"
import FornecedorValidator from "App/Validators/FornecedorValidator"

export default class FornecedorsController {

    index() {
        return Fornecedor.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(FornecedorValidator)
         return Fornecedor.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Fornecedor.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const fornecedor = await Fornecedor.findOrFail(id)

        return fornecedor.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const fornecedor = await Fornecedor.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cnpj', 
            'uf', 
            'cidade'
        ])

        fornecedor.merge(dados)

        return fornecedor.save()

    }
}
