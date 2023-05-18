const { Router } = require("express")
const { getLivros } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
  res.send('Você fez uma requisição do tipo post')
})

module.exports = router
