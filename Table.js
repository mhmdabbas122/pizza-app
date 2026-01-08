import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // remove if you are not using it

const New = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/users");
        if (!res.ok) throw new Error("Failed to load users from API");
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      }
    };

    loadUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default New;
