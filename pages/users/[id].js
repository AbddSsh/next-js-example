import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer
      keywords={user.name + user.id}
      title={user.name}
      description={user.phone}
    >
      <h1>Пользователь с id {user.id}</h1>
      <div>Имя пользователя: {user.name}</div>
      <div>Username: {user.username}</div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
