import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useState } from "react";
import { useBackLocation } from "global";
import axios from "../../../utils/axios";
import { ImageUploaderSingle } from "../../../components/ImageUploaderSingle";

export default function ProductAdd() {
  const backLocation = useBackLocation();

  const [name, setName] = useState("");

  const [brand, setBrand] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState({});

  const [images, setImages] = useState([]);

  const [stock, setStock] = useState("");

  function handleSubmit(e) {
    axios

      .post("products", {
        name,
        brand,
        description,
        price,
        category: category.value,
        img: images,
        stock,
      })
      .then((res) => {
        alert("Product added successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="product__form">
      <div className="product__form__col">
        <div className="product__form__col__panel">
          <Input
            type="text"
            label="Name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            label="Brand"
            placeholder="Enter Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <Textarea
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Pricing</div>

          <Input
            type="number"
            label="Selling price"
            placeholder="Enter selling price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="number"
            label="Add Stock"
            placeholder="Enter stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Media</div>

          <ImageUploaderSingle
            label="Images"
            images={images}
            setImages={setImages}
          />
        </div>
      </div>
      <div className="product__form__col">
        <div
          className="product__form__col__panel"
          style={{
            padding: "2em",
          }}
        >
          <Link
            to={backLocation}
            className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
            onClick={handleSubmit}
          >
            Add New Product
          </Link>
          <Link
            to={backLocation}
            className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
          >
            Delete
          </Link>
        </div>
        <div className="product__form__col__panel">
          <Select
            label="Product Category"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
