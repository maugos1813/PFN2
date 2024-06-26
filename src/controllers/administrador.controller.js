import { pool } from '../config/db.js'

export const getAllUsers = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM User')
  res.json(result)
}

export const partialUpdateUsers = async (req, res) => {
  try {
    const { id } = req.params
    const { username, password, email, idRole } = req.body

    let query = 'UPDATE User SET '
    const params = []

    if (username) {
      query += 'username = ?, '
      params.push(username)
    }
    if (password) {
      query += 'password = ?, '
      params.push(password)
    }
    if (email) {
      query += 'email = ?, '
      params.push(email)
    }
    if (idRole) {
      query += 'idRole = ?, '
      params.push(idRole)
    }

    query = query.slice(0, -2)
    query += ' WHERE user_id = ?'
    params.push(id)

    const [result] = await pool.execute(query, params)

    if (result.affectedRows !== 1) {
      return res.status(500).json({ message: 'No se pudo actualizar el usuario' })
    }

    res.json({ message: 'Usuario actualizado' })
  } catch (error) {
    console.error('Error updating user:', error) // Log the error for debugging
    return res.status(500).json({ message: 'No se pudo actualizar el usuario' })
  }
}

export const deleteOwnUsers = async (req, res) => {
  const { id } = req.params

  if (id === undefined || id === null) {
    return res.status(400).json({ message: 'idUser es requerido' })
  }

  try {
    const [result] = await pool.execute('DELETE FROM User WHERE idUser=?', [id])

    if (result.affectedRows === 1) {
      return res.json({ message: 'Usuario eliminado' })
    }

    return res.status(500).json({ message: 'No se pudo eliminar al usuario' })
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error: error.message })
  }
}

export const createUser = async (req, res) => {
  console.log(req.body)
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Faltan datos en el formulario' })
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO User (username, password, email) VALUES (?, ?, ?)', [username, password, email]
    )
    if (result.affectedRows === 1 && result.insertId) {
      return res.status(201).json({ message: 'Usuario guardado' })
    } else {
      return res.status(500).json({ message: 'Hubo un error al crear el usuario' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error en el servidor' })
  }
}
