import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const API = "http://localhost:5001/api/products";

function Menu() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const fetchProducts = useCallback(async () => {
    try {
      setError("");
      const res = await fetch(API);
      if (!res.ok) throw new Error("API not OK");
      const data = await res.json();
      setProducts(data);

      // If there's an updated product from edit/add, update/add it in the list
      if (location.state?.updatedProduct) {
        const updated = location.state.updatedProduct;
        setProducts(prev => {
          const existingIndex = prev.findIndex(p => p.id === updated.id);
          if (existingIndex >= 0) {
            // Edit: replace
            const newProducts = [...prev];
            newProducts[existingIndex] = updated;
            return newProducts;
          } else {
            // Add: append
            return [...prev, updated];
          }
        });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load products. Please try again later.");
    }
  }, [location.state]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      alert("Delete failed");
    }
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      {/* ✅ Add New Product -> صفحة جديدة */}
      < button onClick={() => navigate("/admin/add")} style={{ marginBottom: 20 , padding:"10px 20px",backgroundColor:"white" }}>
        + Add New Product
      </button>

      {error ? (
        <div style={{ textAlign: "center", marginTop: 40, color: "red" }}>
          <p>{error}</p>
          <button onClick={fetchProducts}>Retry</button>
        </div>
      ) : (
        <div className="menuList">
          {products.map((p) => (
            <MenuItem
              key={p.id}
              id={p.id}
              image={p.image}
              name={p.name}
              price={p.price}
              onEdit={() => navigate(`/admin/edit/${p.id}`)}   // ✅ صفحة تعديل
              onDelete={() => deleteProduct(p.id)}            // ✅ حذف
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
