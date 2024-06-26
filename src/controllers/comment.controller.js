import { pool } from '../config/db.js'

export const crateComment = async (req, res) => {
  console.log(req.body)
  const { content, idUser, idPost } = req.body

  if (!content || !idUser || !idPost) {
    return res.status(400).json({ message: 'Faltan datos para crear el comentario' })
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO Comment (content, idUser, idPost) VALUES (?, ?, ?)', [content, idUser, idPost]
    )

    if (result.affectedRows === 1 && result.insertId) {
      return res.status(201).json({ message: 'Comentario creado' })
    } else {
      return res.status(500).json({ message: 'Hubo un error al crear el comentario' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const editCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const { content } = req.body

    if (!content) {
      return res.status(400).json({ message: 'El contenido del comentario es requerido' })
    }

    const query = 'UPDATE Comment SET content=? WHERE comment_id=?'
    const params = [content, id]

    const [result] = await pool.execute(query, params)
    if (result.affectedRows !== 1) {
      return res.status(404).json({ message: 'Comentario no encontrado' })
    }

    res.json({ message: 'Comentario actualizado' })
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.execute('DELETE FROM Comment WHERE comment_id=?', [id])

    if (result.affectedRows === 1) {
      return res.json({ message: 'Comentario eliminado' })
    }

    return res.status(404).json({ message: 'Comentario no encontrado' })
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const getCommentsByPostId = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ message: 'El ID de la publicación es requerido' })
    }

    const [comments] = await pool.execute('SELECT * FROM Comment WHERE idPost=?', [id])

    if (comments.length === 0) {
      return res.status(404).json({ message: 'No se encontraron comentarios para esta publicación' })
    }

    res.json(comments)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error en el servidor' })
  }
}
