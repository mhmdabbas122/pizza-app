import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:5001/api/products";

export default function AddEditProduct() {
  const { id } = useParams(); // موجود فقط في edit
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "pizza",
  });

  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      fetch(`${API}/${id}`)
        .then((res) => res.json())
        .then((data) => setForm(data));
    }
  }, [id, isEdit]);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const method = isEdit ? "PUT" : "POST";
    const url = isEdit ? `${API}/${id}` : API;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/menu", { state: { updatedProduct: { ...form, id: isEdit ? parseInt(id) : Date.now() } } });
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto" }}>
      <h2>{isEdit ? "Edit Product" : "Add New Product"}</h2>

      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={onChange}
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={onChange}
        />

        <button type="submit">
          {isEdit ? "Update" : "Add"}
        </button>

        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}
