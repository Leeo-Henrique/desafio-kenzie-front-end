import "./styles.css";
export const Rentabilidade = ({ Res }) => {
  return (
    <div className="rent">
      <h1>
        <i>Você receberá:</i>
      </h1>
      <span className="line__blue"></span>
      <p>Amanhã: {Res ? <span>R$ {Res[1]}</span> : <span>R$ 0,00</span>}</p>
      <p>
        Em 15 dias: {Res ? <span>R$ {Res[15]}</span> : <span>R$ 0,00</span>}
      </p>
      <p>
        Em 30 dias: {Res ? <span>R$ {Res[30]}</span> : <span>R$ 0,00</span>}
      </p>
      <p>
        Em 90 dias: {Res ? <span>R$ {Res[90]}</span> : <span>R$ 0,00</span>}
      </p>
    </div>
  );
};
