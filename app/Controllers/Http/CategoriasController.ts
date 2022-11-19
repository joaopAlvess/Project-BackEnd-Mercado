// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria"
import CategoriaValidator from "App/Validators/CategoriaValidator"

export default class CategoriasController {

    index() {
        return Categoria.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(CategoriaValidator)
         return Categoria.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Categoria.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const categoria = await Categoria.findOrFail(id)

        return categoria.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const categoria = await Categoria.findOrFail(id)

        const dados = request.only([
            'categoriaProd'
            
        ])

        categoria.merge(dados)

        return categoria.save()

    }
}
