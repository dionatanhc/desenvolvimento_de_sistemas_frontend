import React, { useState } from "react";

function SerieForm({ onAddSerie }) {
  const [formData, setFormData] = useState({
    titulo: "",
    temporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddSerie(formData);
    setFormData({
      titulo: "",
      temporadas: "",
      dataLancamento: "",
      diretor: "",
      produtora: "",
      categoria: "",
      dataAssistiu: "",
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Série</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" value={formData.titulo} onChange={handleChange} required />
        <input name="temporadas" placeholder="Nº de Temporadas" value={formData.temporadas} onChange={handleChange} required />
        <input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} required />
        <input name="diretor" placeholder="Diretor" value={formData.diretor} onChange={handleChange} required />
        <input name="produtora" placeholder="Produtora" value={formData.produtora} onChange={handleChange} required />
        <input name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} required />
        <input type="date" name="dataAssistiu" value={formData.dataAssistiu} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default SerieForm;
