# 🎓 Desenvolvimento de Sistemas Front-End – PUCRS

Este repositório reúne os projetos desenvolvidos ao longo da disciplina **Desenvolvimento de Sistemas Front-End**, do curso de **Análise e Desenvolvimento de Sistemas da PUCRS**.  
O objetivo da disciplina é introduzir os fundamentos do desenvolvimento de interfaces, componentização, uso de ferramentas modernas e integração entre front-end e back-end.

O trabalho foi dividido em **duas fases**, cada uma com um propósito específico, refletindo a evolução do aprendizado ao longo do trimestre.

---

## 🚀 Objetivo Geral do Projeto

Criar uma aplicação front-end completa utilizando **React**, aplicando conceitos fundamentais como:

- Componentização  
- Manipulação de estado  
- React Router DOM (navegação entre páginas)  
- Estilização e organização de arquivos  
- Integração com API  
- Boas práticas de estruturação de código  
- Versionamento no GitHub

Além disso, a disciplina propõe a criação de uma **API simulada** (fase 2), permitindo a prática de operações CRUD totalmente integradas ao front-end.

---

# 📘 Fase 1 – Construção da Aplicação Front-End

A primeira etapa teve como foco desenvolver uma aplicação estática utilizando **React + Vite**, contendo:

### ✔️ O que foi feito na Fase 1:
- Criação da estrutura base da aplicação com Vite  
- Desenvolvimento das páginas:
  - **Home**
  - **Sobre**
  - **Listagem de Séries**
  - **Formulário de Cadastro**
- Implementação de **componentes reutilizáveis**
- Uso do **React Router DOM** para navegação entre páginas
- Uso de **estado local (useState)** para armazenar dados temporariamente
- Criação de um layout simples com **NavBar estilizada**
- Organização dos arquivos em pastas claras:
  - `components/`
  - `pages/`
  - `service/`
  - `App.jsx`, `main.jsx`, entre outros
- Testes manuais da aplicação

🔎 Nesta fase, os dados não eram persistidos — tudo era mantido localmente na memória.

---

# 🧩 Fase 2 – API + Integração com o Front-End

A segunda etapa evoluiu o projeto para incluir uma API real, permitindo operações completas de CRUD.

### ✔️ O que foi feito na Fase 2:
- Criação de uma **API Node.js** básica simulando um servidor real
- Implementação das rotas:
  - GET (listar séries)
  - POST (cadastrar nova série)
  - PUT (editar série)
  - DELETE (remover série)
- Integração do front-end com a API utilizando **Axios**
- Atualização do `SerieList` e `SerieForm` para enviarem e receberem dados do servidor
- Ajustes na estrutura visual e funcional da aplicação
- Separação da aplicação em:
  - **Projeto – Fase 1** (front-end estático)
  - **Projeto – Fase 2** (front-end integrado + API)
- Criação da pasta `service/api.js` para centralizar as chamadas HTTP

Nesta fase, o projeto evoluiu para uma aplicação completa, simulando um comportamento real de sistemas utilizados no mercado.

---

# 🏁 Conclusão

Este repositório apresenta a evolução prática do aprendizado em desenvolvimento front-end com React.  
Ao final das duas fases, foi possível construir:

- Uma interface organizada, modular e funcional  
- Uma API simples para praticar requisições HTTP  
- Uma aplicação totalmente integrada realizando operações CRUD  
- Uma estrutura profissional, semelhante ao fluxo de trabalho real na área de desenvolvimento

O projeto demonstra domínio crescente dos conceitos fundamentais de front-end modernos, organização de código e integração entre camadas.

---

## 👨‍💻 Autor

**Dionatan Castro**  
Estudante de Análise e Desenvolvimento de Sistemas — PUCRS

