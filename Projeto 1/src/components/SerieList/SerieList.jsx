import React, { useState } from "react";

function SerieList({ series, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  function handleEditChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }

  function salvarEdicao(index) {
    onEdit(index, editData);
    setEditIndex(null);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Listagem de Séries</h2>
      {series.length === 0 ? (
        <p>Nenhuma série cadastrada.</p>
      ) : (
        <ul>
          {series.map((s, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              {editIndex === index ? (
                <div>
                  <input name="titulo" value={editData.titulo} onChange={handleEditChange} />
                  <input name="temporadas" value={editData.temporadas} onChange={handleEditChange} />
                  <button onClick={() => salvarEdicao(index)}>Salvar</button>
                </div>
              ) : (
                <div>
                  <strong>{s.titulo}</strong> — {s.categoria} ({s.temporadas} temporadas)
                  <br />
                  Diretor: {s.diretor} | Produtora: {s.produtora}
                  <br />
                  Lançamento: {s.dataLancamento} | Assistido em: {s.dataAssistiu}
                  <br />
                  <button onClick={() => onDelete(index)}>Excluir</button>
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditData(s);
                    }}
                  >
                    Editar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SerieList;
