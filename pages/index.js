import Head from "next/head";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer
      keywords={"main page"}
      title={"Главная"}
      description={"Тут описание главной страницы..."}
    >
      <div>
        <h1>Главная страница</h1>
      </div>
    </MainContainer>
  );
};

export default Index;
