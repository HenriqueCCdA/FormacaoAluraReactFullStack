const { Router } = require("express")
const { getLivros, getLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req, res) => {
  res.send('Você fez uma requisição do tipo post')
})

module.exports = router
