import { Router } from 'express'
import { getAllUsers, partialUpdateUsers } from '../controllers/administrador.controller.js'
import { createUser, deleteOwnUsers } from '../controllers/usuarios.controller.js'
import { createCategory, deleteCateById, editCategory, getAll, totalEditCategory } from '../controllers/category.controller.js'
import { createPosts, deletePost, getAllPost, updatePost, getPostById, getPostByTitle, getPostByCategory } from '../controllers/publicaciones.controller.js'
import { crateComment, deleteComment, editCommentById, getCommentsByPostId } from '../controllers/comment.controller.js'

const router = Router()
// Routes para administrar usuarios:
router.get('/', getAllUsers) // Obtener todos los usuarios registrados
router.post('/', createUser) // Crear nuevo usuario
router.patch('/:id', partialUpdateUsers) // Editar usuario
router.delete('/:id', deleteOwnUsers) // Eliminar usuario

// Crud de Category:
router.get('/cate', getAll) // Obtener todas las categorias
router.post('/cate', createCategory) // Crear una categoria
router.patch('/cate/:id', editCategory) // Editar una categoria
router.delete('/cate/:id', deleteCateById) // Eliminar una categoria
router.put('/cate/:id', totalEditCategory) // Editar completamente una categoria

// Routes de Publicaciones:
router.get('/publi', getAllPost) // Todas la publicaciones
router.get('/publi/:id', getPostById) // Buscar publicaciones especificas de un usuario por su ID
router.get('/title/:title', getPostByTitle) // Obtener publicaciones por el titulo
router.get('/cate/:id', getPostByCategory) // Obtener publicacion por categoria
router.post('/publi', createPosts) // Crear publicacion
router.patch('/publi/:id', updatePost) // Actualizar publicaciones
router.delete('/publi/:id', deletePost) // Eliminar publicaciones

// Routes para comentarios:
router.get('/com/:id', getCommentsByPostId) // Obtener comentarios segun el Id de publicacion
router.post('/com', crateComment) // Crear comentario
router.patch('/com/:id', editCommentById) // Editar comentario
router.delete('/com/:id', deleteComment) // Eliminar comentario

export default router
