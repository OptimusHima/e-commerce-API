const all_products = require("../models/Product");
const { Sequelize } = require("sequelize");


// Function to Create a new Product

module.exports.create = async function (req, res) {
  try {
    const product = await all_products.findOne({
      where: { product_name: req.body.product_name },
    });
    console.log(req.body.product_name);
    if (!product) {
      const newProduct = await all_products.create(req.body);
      return res.status(200).json({
        message: "Product is Created",
        data: newProduct,
      });
    } else {
      return res.status(200).json({
        message: "Product already exists",
        data: product,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in creating a product",
    });
  }
};

// Function to fetch all products

module.exports.getProduct = async function (req, res) {
  try {
    const products = await all_products.findAll();
    return res.status(200).json({
      message: "Products List",
      data: products,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in finding products",
    });
  }
};

// Function to delete a product
module.exports.delete = async function (req, res) {
  try {
    const productId = req.params.id;
    
    // Delete the product with the given ID
    const deletedProductCount = await all_products.destroy({ where: { id: productId } });
    
    if (deletedProductCount === 0) {
      // If no product was deleted (product not found), return a 404 status code
      return res.status(404).json({
        message: `Product with ID ${productId} not found`,
      });
    }

    return res.status(200).json({
      message: `Product with ID ${productId} deleted successfully`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in deleting the product",
    });
  }
};

// Function to update a product

module.exports.update = async function (req, res) {
  try {
    const productId = req.params.id;

    // Get the updated content from the request body
    const updatedContent = req.body;

    // Update the product with the given ID
    const [updatedCount, updatedProducts] = await all_products.update(
      updatedContent,
      { where: { id: productId } }
    );

    if (updatedCount === 0) {
      // If no product was updated (product not found), return a 404 status code
      return res.status(404).json({
        message: `Product with ID ${productId} not found`,
      });
    }

    // Find the updated product
    const updatedProduct = await all_products.findByPk(productId);

    return res.status(200).json({
      message: "Product update successful!",
      data: updatedProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in updating the product",
    });
  }
};