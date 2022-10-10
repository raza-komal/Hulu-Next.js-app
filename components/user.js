function User({ user }) {
  return (
    <div>
      <h4> Name: {user.name}</h4>
      <h5>Email: {user.email}</h5>
    </div>
  );
}

export default User;
