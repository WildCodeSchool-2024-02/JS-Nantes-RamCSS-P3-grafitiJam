// eslint-disable-next-line react/prop-types
function Admin({ alias }) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {alias}! You have admin privileges.</p>
      {/* Add more admin-specific content here */}
    </div>
  );
}

export default Admin;
