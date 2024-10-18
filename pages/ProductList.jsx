import Filtro from "../Components/AsideBar/AsideBar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/header2.0/Header";
import BoxProduto from "../components/Boxproduto/boxproduto";

export default function PaginaDeProdutos() {
  return (
    <>
      <Header />
      <div className="productPageContainer">
        <Filtro />
        <BoxProduto />
      </div>
      <Footer />

      <style>{`
        .productPageContainer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
        }

        .productPageContainer > * {
          flex: 1;
        }

        .productPageContainer > :first-child {
          max-width: 300px;
          margin-right: 20px;
        }

        .productPageContainer > :last-child {
          flex-grow: 3;
          flex-grow: 3;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
