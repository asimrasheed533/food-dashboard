import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useState } from "react";
import { useBackLocation } from "global";
import { ImageUploaderMultiple } from "../../../components/ImageUploaderMultiple";

export default function ProductEdit() {
  const backLocation = useBackLocation();
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  return (
    <div className="product__form">
      <div className="product__form__col">
        <div className="product__form__col__panel">
          <Input type="text" label="Title" placeholder="Short sleeve t-shirt" />
          <Textarea label="Description" placeholder="Enter Description" />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Pricing</div>

          <Input
            type="number"
            label="Selling price"
            placeholder="Enter selling price"
          />

          <Input
            type="number"
            label="Tax rate (%)"
            placeholder="Enter tax rate"
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Media</div>

          <ImageUploaderMultiple
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
          >
            Add New Product
          </Link>
          <Link
            to={backLocation}
            className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
          >
            Delete Product
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

          <Select
            label="Brand"
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
