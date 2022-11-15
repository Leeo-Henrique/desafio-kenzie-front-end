import "./form.css";
import { useState } from "react";
export const Form = ({ SetRes, SetLoading }) => {
  const [Amount, SetAmount] = useState("");
  const [Installments, SetInstallments] = useState("");
  const [Mdr, SetMdr] = useState("");

  const Object = {
    amount: Amount,
    installments: Installments,
    mdr: Mdr,
  };

  const SendData = async () => {
    if (Object.amount < 1000) {
      window.alert("Amount cannot be less than 1000");
      return SetAmount(0);
    }
    if (Object.installments < 1) {
      window.alert("Installments cannot be less than 1");
      return SetInstallments(0);
    }
    if (Object.installments > 12) {
      window.alert("Installments cannot be greater than 12");
      return SetInstallments(0);
    }
    if (Object.mdr > 100) {
      window.alert("Mdr cannot be greater than 100");
      return SetMdr(0);
    }

    SetLoading(true);
    fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        SetRes(res);
        SetLoading(false);
      })
      .catch((err) => {
        window.alert("Algo deu errado");
        SetLoading(false);
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Simule sua Antecipação</h1>
      <label htmlFor="amount">Informe o valor da venda *</label>
      <input
        name="amount"
        type="number"
        onChange={(e) => {
          SetAmount(e.target.value);
        }}
        value={Amount}
      />
      <div>
        <label>Em quantas parcelas *</label>
        <input
          name="installments"
          type="number"
          onChange={(e) => {
            SetInstallments(e.target.value);
          }}
          value={Installments}
        />
        <span>Máximo de 12 parcelas</span>
      </div>
      <label>Informe o percentual de MDR *</label>
      <input
        name="mdr"
        type="number"
        onChange={(e) => {
          SetMdr(e.target.value);
        }}
        value={Mdr}
      />
      <button onClick={(e) => SendData(e)}>Enviar</button>
    </form>
  );
};
