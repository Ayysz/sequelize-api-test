const db = require('../models/index');
const user = db.User;

exports.sendData = async (req, res, next) => {
    try {
        const { first_name, last_name, bio, email, phone} = req.body;
        const reqData = {
            first_name,
            last_name,
            bio,
            email,
            phone,
        };

        const response = await user.create(reqData);
        console.log(response);
        if(response.length > 0){
            return res.status(201)
            .json({
                success: true,
                message: 'Data telah berhasil di tambah!',
                data: reqData
            })
        }else{
            return res.status(400)
            .json({
                success: false,
                message: 'Data gagal ditambah',
                data: reqData
            })
        }
        
    } catch (error) {
        next(error)
    }
};

exports.getAllData = async (req, res, next) => {
    try {
        const response = await user.findAll();
        if(response.length > 0){
            return res.status(201)
            .json({
                success: true,
                message: 'Data ditemukan!',
                data: response
            })
        }else{
            return res.status(400)
            .json({
                success: false,
                message: 'Data kosong',
                data: response
            })
        }

    } catch (error) {
        next(error)
    }
};