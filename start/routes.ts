
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')

Route.group(() => {

Route.resource('/categorias', 'CategoriasController').apiOnly()
Route.resource('/clientes', 'ClientesController').apiOnly()
Route.resource('/estoques', 'EstoquesController').apiOnly()
Route.resource('/fornecedores', 'FornecedorsController').apiOnly()
Route.resource('/pedidos', 'PedidosController').apiOnly()
Route.resource('/produtos', 'ProdutosController').apiOnly()
Route.resource('/produtoFornecedores', 'ProdutoFornecedorsController').apiOnly()

}).middleware('auth')

