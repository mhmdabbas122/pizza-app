import React from "react";

function MenuItem({ image, name, price, onEdit, onDelete }) {
  const img = image || "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 200,
        }}
        role="img"
        aria-label={name}
      />

      <h3>{name}</h3>
      <p>${price}</p>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button 
          onClick={onEdit}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid orange',
            padding: '5px 10px',
            fontSize: '12px',
            borderRadius: '5px',
            cursor: 'pointer',
            height: '30px'
          }}
        >
          Edit
        </button>
        <button 
          onClick={onDelete}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid orange',
            padding: '5px 10px',
            fontSize: '12px',
            borderRadius: '5px',
            cursor: 'pointer',
            height: '30px'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
