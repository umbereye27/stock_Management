const express = require("express");
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      size: products.length,
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: err.status,
      message: err.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const products = await Product.create(req.body);
    res.status(200).json({
      message: "product created successfully",
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: err.status,
      message: err.message,
    });
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "product updated successfully",
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: err.status,
      message: err.message,
    });
  }
};
exports.removeProduct = async (req, res, next) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      massage: "product deleted successfully",
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: err.status,
      message: err.message,
    });
  }
};
exports.getProduct = async (req, res, next) => {
  try {
    const products = await Product.find(req.query.name);
    res.status(200).json({
      size: products.length,
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: err.status,
      message: err.message,
    });
  }
};
