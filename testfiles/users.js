import User from "../components/user";

const users = ({ users }) => {
  return (
    <>
      <h1>UsersList with User details</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default users;

// It will run at will time
export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
