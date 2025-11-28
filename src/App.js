import { useState } from "react";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (event) => {
    event.preventDefault();

    if (!altura || !peso) return;

    const alturaMetros = parseFloat(altura);
    const pesoKg = parseFloat(peso);

    if (alturaMetros <= 0 || pesoKg <= 0) return;

    const valorIMC = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(valorIMC);
    classificarIMC(valorIMC);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) setClassificacao("Magreza");
    else if (imc < 24.9) setClassificacao("Normal");
    else if (imc < 29.9) setClassificacao("Sobrepeso");
    else if (imc < 39.9) setClassificacao("Obesidade");
    else setClassificacao("Obesidade grave");
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC} style={styles.form}>
        <input
          type="number"
          step="0.01"
          placeholder="Altura (ex: 1.75)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Peso (ex: 70.5)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Calcular IMC
        </button>
      </form>

      {imc && (
        <div style={styles.result}>
          <p><strong>IMC:</strong> {imc}</p>
          <p><strong>Classificação:</strong> {classificacao}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    background: "#f4f4f4",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  result: { marginTop: "15px", fontSize: "18px" },
};

export default App;

