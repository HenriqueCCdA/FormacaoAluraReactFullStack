const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

module.exports = router
