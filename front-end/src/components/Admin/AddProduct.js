import React, { Fragment, useState } from "react";
import styles from "../Styles/AddProduct.module.scss";
import Button from "../UI/Button";
import Form from "../UI/Form";

import AdminNav from "./AdminNav";
const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [postProduct, setPostProduct] = useState({});

  async function addProductHandler(postProduct) {
    const response = await fetch('http://localhost:4000/products/', {
      method: 'POST',
      body: JSON.stringify(postProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const submitHandler =(e) => {
    e.preventDefault();
    setPostProduct({
      name,
      category,
      price,
      description,
      image: imageLink,
    });
    console.log(postProduct);
    addProductHandler(postProduct);
    // setName("");
    // setCategory("");
    // setPrice("");
    // setDescription("");
    // setImageLink("");
    //setPostProduct({});
  };

  const changeSelect = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  return (
    <div className={styles.addProduct}>
      <AdminNav />
      <Form onSubmit={submitHandler}>
        <h1>Add product</h1>
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label htmlFor="category">Category</label>
        <select onChange={(event) => setCategory(event.target.value)}>
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smartphone</option>
          <option value="accesory">Accesory</option>
        </select>
        <label htmlFor="price">Price $</label>
        <input
          id="price"
          type="number"
          required
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <label htmlFor="imageLink">Image Link</label>
        <input
          id="imageLink"
          type="text"
          required
          onChange={(event) => setImageLink(event.target.value)}
          value={imageLink}
        />
        <Button id={styles.submitBtn} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
