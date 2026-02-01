# 📘 Documentação do Projeto – CRUD Banco Imobiliário

## 1. Visão Geral do Projeto

Este projeto tem como objetivo a construção de um **sistema CRUD inspirado no jogo Banco Imobiliário**, permitindo o gerenciamento de jogadores e propriedades, bem como operações de **compra, venda e transferência de propriedades** entre jogadores.

O projeto foi pensado como **ambiente de prática full stack**, utilizando Angular no front-end, Laravel no back-end e MySQL como banco de dados, com integração via APIs REST.

---

## 2. Objetivos

* Praticar integração **front-end + back-end**
* Aplicar conceitos de **APIs REST**
* Exercitar **modelagem de dados relacional**
* Implementar regras de negócio (compra, venda e transferência)
* Utilizar **boas práticas de desenvolvimento** e metodologia ágil

---

## 3. Stack Tecnológica

### Front-end

* Angular 12+
* HTML5
* CSS3
* SASS
* Ionic / Cordova (versão mobile)

### Back-end

* PHP 8+
* Laravel
* APIs RESTful

### Banco de Dados

* MySQL

### Metodologia

* Arquitetura MVC
* Padrão REST
* Metodologia Ágil (Scrum / Kanban)

---

## 4. Escopo Funcional

O sistema deverá permitir:

* Cadastro, edição, listagem e exclusão de jogadores
* Cadastro, edição, listagem e exclusão de propriedades
* Compra de propriedade por jogador
* Venda de propriedade pelo jogador
* Transferência de propriedade entre jogadores

---

## 5. Entidades do Sistema

### 5.1 Jogador

Representa um participante do jogo.

**Atributos:**

* id (PK)
* nome
* saldo
* data_criacao
* data_atualizacao

---

### 5.2 Propriedade

Representa um imóvel disponível no jogo.

**Atributos:**

* id (PK)
* nome
* valor
* jogador_id (FK – pode ser nulo)
* data_criacao
* data_atualizacao

---

## 6. Relacionamento entre Entidades

* Um **Jogador** pode possuir **várias Propriedades** (1:N)
* Uma **Propriedade** pode pertencer a apenas **um Jogador** ou a nenhum

---

## 7. Regras de Negócio

### 7.1 Compra de Propriedade

* A propriedade deve estar sem dono
* O jogador deve possuir saldo suficiente
* O valor da propriedade é debitado do saldo do jogador
* A propriedade passa a pertencer ao jogador

---

### 7.2 Venda de Propriedade

* O jogador deve ser o dono da propriedade
* O valor da propriedade é creditado ao saldo do jogador
* A propriedade fica sem dono

---

### 7.3 Transferência de Propriedade

* O jogador de origem deve ser o dono da propriedade
* O jogador de destino deve possuir saldo suficiente
* O valor da propriedade é transferido do comprador para o vendedor
* A propriedade muda de dono

---

## 8. Modelo Entidade-Relacionamento (MER)

### 8.1 Entidades

**JOGADOR**

* id (PK)
* nome
* saldo
* created_at
* updated_at

**PROPRIEDADE**

* id (PK)
* nome
* valor
* jogador_id (FK, nullable)
* created_at
* updated_at

### 8.2 Relacionamento

* JOGADOR (1) —— (N) PROPRIEDADE
* Um jogador pode possuir zero ou muitas propriedades
* Uma propriedade pertence a zero ou um jogador

### 8.3 Representação Textual do MER

JOGADOR ||——o{ PROPRIEDADE

Onde:

* || = exatamente um
* o{ = zero ou muitos

---

## 9. Casos de Uso do Sistema

### Atores

* Jogador (usuário do sistema)
* Administrador (opcional para gestão)

---

### UC01 – Cadastrar Jogador

**Ator:** Administrador

**Descrição:** Permite cadastrar um novo jogador no sistema.

**Fluxo Principal:**

1. Administrador informa nome e saldo inicial
2. Sistema valida os dados
3. Sistema salva o jogador
4. Sistema retorna confirmação

---

### UC02 – Listar Jogadores

**Ator:** Jogador / Administrador

**Descrição:** Exibe todos os jogadores cadastrados.

---

### UC03 – Cadastrar Propriedade

**Ator:** Administrador

**Descrição:** Permite cadastrar uma nova propriedade sem dono.

---

### UC04 – Comprar Propriedade

**Ator:** Jogador

**Descrição:** Jogador compra uma propriedade disponível.

**Fluxo Principal:**

1. Jogador seleciona propriedade sem dono
2. Sistema verifica saldo
3. Sistema debita o valor do saldo
4. Sistema associa propriedade ao jogador
5. Sistema confirma a operação

**Fluxo Alternativo:**

* Saldo insuficiente → operação negada

---

### UC05 – Vender Propriedade

**Ator:** Jogador

**Descrição:** Jogador vende uma propriedade que possui.

**Fluxo Principal:**

1. Jogador seleciona sua propriedade
2. Sistema remove vínculo da propriedade
3. Sistema credita o valor ao saldo

---

### UC06 – Transferir Propriedade

**Ator:** Jogador

**Descrição:** Transfere uma propriedade de um jogador para outro.

**Fluxo Principal:**

1. Jogador vendedor seleciona propriedade
2. Seleciona jogador comprador
3. Sistema valida saldo do comprador
4. Sistema transfere valor entre jogadores
5. Sistema atualiza o dono da propriedade

---

## 10. Endpoints da API (Exemplo)

* app/

  * Models/

    * Jogador.php
    * Propriedade.php
  * Http/Controllers/

    * JogadorController.php
    * PropriedadeController.php
* routes/api.php

---

## 10. Estrutura de Pastas (Front-end – Angular)

* src/app/

  * modules/

    * jogadores/
    * propriedades/
  * services/

    * jogador.service.ts
    * propriedade.service.ts
  * pages/

---

## 11. Critérios de Aceitação

* Todas as operações CRUD funcionando
* Regras de negócio respeitadas
* Comunicação via API REST
* Interface funcional no web e mobile

---

## 12. Evoluções Futuras (Opcional)

* Histórico de transações
* Autenticação de usuários
* Controle de turnos
* Dashboard com saldo e propriedades

---

## 13. Considerações Finais

Este projeto serve como base sólida para prática de desenvolvimento full stack, podendo ser expandido para simular regras mais complexas do jogo Banco Imobiliário ou adaptado para outros contextos de sistemas de gestão.
