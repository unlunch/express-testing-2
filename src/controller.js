const userModels = require('./models');

const createUser = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.email || !body.gender){
        return res.status(400).json({
            message: 'You submitted incorrect data',
            data: null,
        })
    }

    try {
        await userModels.addUserHandler(body);
        res.status(201).json({
            message: 'User has been created',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


const getAllUser = async (req, res) => {
try {
    const [data] = await userModels.getAllusersHandler();

    res.status(200).json({
        status: 'success',
        data: data
    });
} catch (error) {
    res.status(500).json({
        status: 'failed',
        message: error.message
    });
}
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await userModels.updateUserHandler(id, body);

        res.status(200).json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModels.deleteUserHandler(id);

        res.status(200).json({
            status: 'success',
            message: `User with id ${id} has been deleted`
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message
        });
    }
}
module.exports = {
    getAllUser,
    updateUser,
    deleteUser,
    createUser
}