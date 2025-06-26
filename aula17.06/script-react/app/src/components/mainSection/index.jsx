import illustrationMain from "../../assets/image/fundo.jpg";
import Card from "../card";
import "./style.css";

const MainSection = () => {
  return (
    <main>
      <img src={illustrationMain} alt="" />

      <h2>Aprenda com porjetos reais</h2>

      <p>
        Nossa plataforma oferece cursos práticos, com foco em desenvolvimento de
        projeto do zero. Aprenda na prática com aulas simples, didáticas e
        acessíveis
      </p>

      <div className="card-grid">
        <Card title="JavaScript Moderno" description="Do básico ao " />
        <Card></Card>
      </div>
    </main>
  );
};
export default MainSection;
