const { resume } = require('../config/db');
const product = require('../models/product');

const getProduct = async(req,res)=>{
    try {
        let result = await product.getProduct();

        return res.status(200).json({
            result :true,
            message: "Retrieved data successfully",
            data: result
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            result: true,
            message: 'something when wrong'
        });
    }
}

const productDetail = async(req,res)=>{
    try {
        let id = req.params.id
        console.log(id);
        
        let result = await product.productDetail(id);

        return res.status(200).json({
            result: true,
            message: 'get data successfully',
            data: result
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            result: true,
            message: 'something went wrong'
        });
    }
}

const updateProduct = async(req,res)=>{
    try {
        let data = req.body;
        let id = req.params.id;
        let result = await product.updateProduct(data.product,data.price,data.stock,id);

        return res.status(200).json({
            result: true,
            message: "update successfully",
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            result: false,
            message: "something went wrong"
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id);
        
        let result = await product.deleteProduct(id);

        return res.status(200).json({
            result: true,
            message: 'Delete Data successfully'
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            result: false,          // ← was true
            message: "something went wrong"
        });
    }
}

const createProduct = async(req,res)=>{
    try {
    let data = req.body;
    console.log(data);
    
    let result = await product.createProduct(data.product,data.price,data.stock);

    return res.status(200).json({
        result: true,
        message: 'create data successfully',
    })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            result: false,
            message: "something when wrong"
        });
    }
}
module.exports={
    getProduct,
    productDetail,
    updateProduct,
    deleteProduct,
    createProduct
}