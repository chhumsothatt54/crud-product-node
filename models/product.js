const pool = require('../config/db');

async function getProduct(){
    let sql = 'select * from products';
    const [rows] = await pool.query(sql);
    return rows;
}

async function productDetail(id){
    let sql = 'select * from products where id = ?';
    let [row] = await pool.query(sql,[id]);

    return row;
}

async function updateProduct(product,price,stock,id){
    let sql = 'update products set product=?,price=?,stock=? where id = ?';
    let [row] = await pool.query(sql,[product,price,stock,id]);
    return row;
}

const createProduct = async (product,price,stock)=>{
    console.log(product);
    
    const sql = `
        INSERT INTO products (product, price, stock)
        VALUES (?, ?, ?)
    `;
    let [row] = await pool.query(sql,[product,price,stock]);

    return row;
}

const deleteProduct = async(id)=>{
    let sql = 'delete from products where id=?';
    let [row] =  await pool.query(sql,[id]);

    return row;
}

module.exports = {
    getProduct,
    productDetail,
    updateProduct,
    createProduct,
    deleteProduct
}