import { pool } from '../config/db.js'

export const createPosts = async (req, res) => {
  console.log(req.body)
  const { title, content } = req.body

  if (!title || !content) {
    return res.status(400).json({ message: 'Faltan datos para crear la publicacion' })
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO Post (title, content) VALUES (?, ?)',
      [title, content]
    )

    if (result.affectedRows === 1 && result.insertId) {
      return res.status(201).json({ message: 'Publicacion creada correctamente', postId: result.insertId })
    } else {
      return res.status(500).json({ message: 'Hubo un error al crear la publicacion' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error en el servidor', error: error.message })
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body

    if (!title && !content) {
      return res.status(400).json({ message: 'Se requiere al menos un campo para actualizar' })
    }

    let query = 'UPDATE Post SET '
    const params = []

    if (title) {
      query += 'title=?, '
      params.push(title)
    }
    if (content) {
      query += 'content=?, '
      params.push(content)
    }

    if (params.length > 0) {
      query = query.slice(0, -2)
    }

    query += ' WHERE idPost=?'
    params.push(id)

    const [result] = await pool.execute(query, params)
    if (result.affectedRows !== 1) {
      return res.status(500).json({ message: 'No se pudo actualizar publicacion' })
    }

    return res.status(200).json({ message: 'Publicación actualizada correctamente' })
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params
  const [result] = await pool.execute('DELETE FROM Post WHERE idPost=?', [id])

  if (result.affectedRows === 1) {
    return res.json({ message: 'Publicacion eliminada' })
  }

  return res.status(500).json({ message: 'No se pudo eliminar la publicacion' })
}

export const getAllPost = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM Post ')
  res.json(result)
}

export const getPostById = async (req, res) => {
  const { id } = req.params
  const [result] = await pool.execute('SELECT * FROM Post WHERE idPost=?', [id])
  return res.json(result)
}

export const getPostByCategory = async (req, res) => {
  const { id } = req.params
  const [result] = await pool.execute('SELECT * FROM Post_Category WHERE category_id=?', [id])
  return res.json(result)
}

export const getPostByTitle = async (req, res) => {
  const { title } = req.params
  const [result] = await pool.execute('SELECT * FROM Post WHERE title=?', [title])
  return res.json(result)
}
