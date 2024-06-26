import { Router } from 'express'
import { createUser, deleteOwnUsers, partialUpdateUsers } from '../controllers/usuarios.controller.js'
import { createPosts, deletePost, getAllPost, getPostByCategory, getPostById, getPostByTitle, updatePost } from '../controllers/publicaciones.controller.js'
import { crateComment, deleteComment, editCommentById, getCommentsByPostId } from '../controllers/comment.controller.js'

const router = Router()

router.post('/', createUser) // Crear usuario
router.patch('/:id', partialUpdateUsers) // Atualizar usuario
router.delete('/:id', deleteOwnUsers) // Eliminar usuario
// Rutas para las publicaciones:
router.get('/publi', getAllPost) // Todas la publicaciones(para el inicio de app)
router.get('/publi/:id', getPostById) // Buscar publicaciones especificas de un usuario por su ID
router.get('/title/:title', getPostByTitle) // Obtener publicaciones por el titulo
router.get('/cate/:id', getPostByCategory) // Obtener publicacion por categoria
router.post('/publi', createPosts) // Crear publicacion
router.patch('/publi/:id', updatePost) // Actualizar publicaciones
router.delete('/publi/:id', deletePost) // Eliminar publicaciones

// Rutas para los comentarios:
router.get('/com/:id', getCommentsByPostId) // Obtener comentarios segun el Id de publicacion
router.post('/com', crateComment) // Crear comentario
router.patch('/com/:id', editCommentById) // Editar comentario
router.delete('/com/:id', deleteComment) // Eliminar comentario

export default router
