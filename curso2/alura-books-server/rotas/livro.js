const { Router } = require("express")
const { getLivros, getLivro, postLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

module.exports = router
