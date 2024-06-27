import { pool } from '../config/db.js'

export const createCategory = async (req, res) => {
  const { idUser, categoryName } = req.body

  // Verificar si el usuario es administrador
  if (idUser !== 2) {
    return res.status(403).json({ message: 'No autorizado' })
  }

  // Verificar si el nombre de la categoría se proporcionó
  if (!categoryName) {
    return res.status(400).json({ message: 'Faltan datos para crear categoría' })
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO Category (categoryName) VALUES (?)', [categoryName]
    )

    if (result.affectedRows === 1 && result.insertId) {
      return res.status(201).json({ message: 'Categoría creada' })
    } else {
      return res.status(500).json({ message: 'Hubo un error al crear la categoría' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const editCategory = async (req, res) => {
  const { idUser, categoryName } = req.body
  const { id } = req.params

  // Verificar si el usuario es administrador
  if (idUser !== 2) {
    return res.status(403).json({ message: 'No autorizado' })
  }

  // Verificar si el nombre de la categoría se proporcionó
  if (!categoryName) {
    return res.status(400).json({ message: 'El nombre de la categoría es requerido' })
  }

  try {
    let query = 'UPDATE Category SET '
    const params = []

    if (categoryName) {
      query += 'categoryName = ?, '
      params.push(categoryName)
    }

    query = query.slice(0, -2) // Eliminar la última coma y espacio
    query += ' WHERE idCategory = ?'
    params.push(id)

    const [result] = await pool.execute(query, params)

    if (result.affectedRows !== 1) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }

    res.json({ message: 'Categoría actualizada correctamente' })
  } catch (error) {
    console.error('Error actualizando la categoría:', error)
    return res.status(500).json({ message: 'No se pudo actualizar la categoría' })
  }
}

export const getAll = async (req, res) => {
  const { idUser } = req.body

  if (idUser !== 2) {
    return res.status(403).json({ message: 'No autorizado ' })
  }
  const [result] = await pool.query('SELECT * FROM Category')
  res.json(result)
}

export const deleteCateById = async (req, res) => {
  const { idUser } = req.body

  if (idUser !== 2) {
    return res.status(403).json({ message: 'No autorizado' })
  }

  const { id } = req.params

  try {
    const [result] = await pool.execute('DELETE FROM Category WHERE idCategory=?', [id])

    if (result.affectedRows === 1) {
      return res.json({ message: 'Categoría eliminada' })
    } else {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }
  } catch (error) {
    console.error('Error eliminando la categoría:', error)
    return res.status(500).json({ message: 'No se pudo eliminar la categoría' })
  }
}

export const totalEditCategory = async (req, res) => {
  const { idUser } = req.body
  if (idUser !== 2) {
    return res.status(403).json({ message: 'No autorizado' })
  }
  try {
    const { id } = req.params
    const { idCategory, categoryName } = req.body

    let query = 'UPDATE Category SET '
    const params = []

    if (idCategory) {
      query += 'idCategory=?, '
      params.push(idCategory)
    }
    if (categoryName) {
      query += 'categoryName=?, '
      params.push(categoryName)
    }

    query = query.slice(0, -2)
    query += ' WHERE idCategory=?'
    params.push(id)

    const [result] = await pool.execute(query, params)
    if (result.affectedRows !== 1) {
      return res.status(500).json({ message: 'No se pudo actualizar la categoria' })
    }

    res.json({ message: 'Categoria actualizada' })
  } catch (error) {
    return res.status(500).json({ message: 'No se pudo actualizar la categoria' })
  }
}
