const dbPool = require('../config/database');

const addUserHandler = (body) => {
    const SQLQuery =`  INSERT INTO mahasiswa (name, email, gender) 
                        VALUES ('${body.name}', '${body.email}', '${body.gender}')`;

    return dbPool.execute(SQLQuery);
}

const getAllusersHandler = () => {
    const SQLQuery = `SELECT * FROM mahasiswa`;

    return dbPool.execute(SQLQuery);
};

const updateUserHandler = (id,body) => {
    const SQLQuery = `  UPDATE mahasiswa 
                        SET name='${body.name}', email='${body.email}', gender='${body.gender}' 
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const deleteUserHandler = (id) => {
    const SQLQuery = `DELETE FROM mahasiswa WHERE id = ${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllusersHandler,
    updateUserHandler,
    deleteUserHandler,
    addUserHandler
}