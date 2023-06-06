import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords, title, description }) => {
  return (
    <>
      <Head>
        <meta keywords={"abddssh, next js" + keywords}></meta>
        <title>{title}</title>
        <description>{description}</description>
      </Head>
      <div>
        <A href={"/"} text={"Главная страница"} />
        <A href={"/users"} text={"Пользователи"} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
