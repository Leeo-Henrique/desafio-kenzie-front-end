import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";

export const Formulario = ({ setResponseApi, setLoading }) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");

  const data = {
    amount: amount,
    installments: installments,
    mdr: mdr,
  };

  const sendData = async () => {
    // verificações do back-end
    if (data.amount < 1000) {
      toast.warning("Amount cannot be less than 1000");
      return setAmount(0);
    }
    if (data.installments < 1) {
      toast.warning("Installments cannot be less than 1");
      return setInstallments(0);
    }
    if (data.installments > 12) {
      toast.warning("Installments cannot be greater than 12");
      return setInstallments(0);
    }
    if (data.mdr > 100) {
      toast.warning("Mdr cannot be greater than 100");
      return setMdr(0);
    }

    setLoading(true);
    fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          // dependendo da resposta ela nao vai para o catch assim
          // tratando de uma forma diferente
          toast.warning(`Algo deu errado, ${res.message}`);
        }
        setResponseApi(res);
        setLoading(false);
      })
      .catch((err) => {
        toast.warning("Algo deu errado");
        setLoading(false);
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
          setAmount(e.target.value);
        }}
        value={amount}
      />
      <div>
        <label>Em quantas parcelas *</label>
        <input
          name="installments"
          type="number"
          onChange={(e) => {
            setInstallments(e.target.value);
          }}
          value={installments}
        />
        <span>Máximo de 12 parcelas</span>
      </div>
      <label>Informe o percentual de MDR *</label>
      <input
        name="mdr"
        type="number"
        onChange={(e) => {
          setMdr(e.target.value);
        }}
        value={mdr}
      />
      <button onClick={(e) => sendData(e)}>Enviar</button>
    </form>
  );
};
