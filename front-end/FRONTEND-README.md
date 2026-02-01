# 🎲 Banco Imobiliário - Front-end

Sistema de gerenciamento para o jogo Banco Imobiliário desenvolvido com Angular 21.

## 📋 Sobre o Projeto

Aplicação front-end completa para gerenciar jogadores e propriedades do jogo Banco Imobiliário, com interface moderna e intuitiva utilizando paleta de cores preto e branco.

## 🚀 Tecnologias

- **Angular 21** - Framework front-end
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa
- **Angular Router** - Navegação entre páginas
- **HttpClient** - Comunicação com API

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── core/                      # Núcleo da aplicação
│   │   ├── models/                # Interfaces e modelos
│   │   │   ├── jogador.model.ts
│   │   │   ├── propriedade.model.ts
│   │   │   └── index.ts
│   │   └── services/              # Serviços de API
│   │       ├── jogador.service.ts
│   │       ├── propriedade.service.ts
│   │       └── index.ts
│   │
│   ├── shared/                    # Componentes compartilhados
│   │   └── components/
│   │       ├── header/            # Cabeçalho com navegação
│   │       └── footer/            # Rodapé
│   │
│   ├── modules/                   # Módulos de funcionalidades
│   │   ├── home/                  # Página inicial
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.scss
│   │   │
│   │   ├── jogadores/             # Módulo de Jogadores
│   │   │   ├── jogadores-list/    # Lista de jogadores
│   │   │   ├── jogadores-form/    # Formulário criar/editar
│   │   │   ├── jogadores-module.ts
│   │   │   └── jogadores-routing.module.ts
│   │   │
│   │   └── propriedades/          # Módulo de Propriedades
│   │       ├── propriedades-list/ # Lista de propriedades
│   │       ├── propriedades-form/ # Formulário criar/editar
│   │       ├── propriedades-module.ts
│   │       └── propriedades-routing.module.ts
│   │
│   ├── app.ts                     # Componente principal
│   ├── app.html                   # Template principal
│   ├── app.scss                   # Estilos principal
│   ├── app.config.ts              # Configuração da aplicação
│   └── app.routes.ts              # Rotas principais
│
├── environments/                  # Configurações de ambiente
│   └── environment.ts
│
└── styles.scss                    # Estilos globais
```

## 🎨 Funcionalidades

### Jogadores
- ✅ Listar todos os jogadores
- ✅ Criar novo jogador
- ✅ Editar jogador existente
- ✅ Excluir jogador
- ✅ Visualizar saldo e informações

### Propriedades
- ✅ Listar todas as propriedades
- ✅ Criar nova propriedade
- ✅ Editar propriedade existente
- ✅ Excluir propriedade
- ✅ Visualizar cor, preço e aluguel
- ✅ Associar proprietário (jogador)

### Interface
- ✅ Header com navegação por dropdown
- ✅ Footer informativo
- ✅ Página inicial com apresentação
- ✅ Design responsivo
- ✅ Tema preto e branco moderno
- ✅ Animações suaves
- ✅ Feedback visual para ações

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd front-end
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**
Edite `src/environments/environment.ts` para apontar para sua API:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```

## 🏃 Executando a Aplicação

### Modo de desenvolvimento
```bash
npm start
```
Acesse `http://localhost:4200`

### Build de produção
```bash
npm run build
```
Os arquivos serão gerados em `dist/`

## 🎯 Rotas da Aplicação

| Rota | Descrição |
|------|-----------|
| `/home` | Página inicial |
| `/jogadores/lista` | Lista de jogadores |
| `/jogadores/criar` | Criar novo jogador |
| `/jogadores/editar/:id` | Editar jogador |
| `/propriedades/lista` | Lista de propriedades |
| `/propriedades/criar` | Criar nova propriedade |
| `/propriedades/editar/:id` | Editar propriedade |

## 🔌 API Integration

A aplicação consome uma API REST Laravel. Os serviços estão em `src/app/core/services/`:

- `JogadorService` - CRUD de jogadores
- `PropriedadeService` - CRUD de propriedades

Endpoints esperados:
- `GET /api/jogadores` - Listar jogadores
- `POST /api/jogadores` - Criar jogador
- `GET /api/jogadores/{id}` - Buscar jogador
- `PUT /api/jogadores/{id}` - Atualizar jogador
- `DELETE /api/jogadores/{id}` - Excluir jogador
- `GET /api/propriedades` - Listar propriedades
- `POST /api/propriedades` - Criar propriedade
- `GET /api/propriedades/{id}` - Buscar propriedade
- `PUT /api/propriedades/{id}` - Atualizar propriedade
- `DELETE /api/propriedades/{id}` - Excluir propriedade

## 🎨 Tema e Design

O projeto utiliza uma paleta de cores preto e branco:
- **Primária**: `#1a1a1a` (Preto)
- **Secundária**: `#2d2d2d` (Cinza escuro)
- **Background**: `#f5f5f5` (Cinza claro)
- **Texto**: `#333` (Cinza escuro)
- **Branco**: `#ffffff`

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🧪 Testes

```bash
npm test
```

## 📝 Convenções de Código

- **Standalone Components**: Todos os componentes são standalone
- **Reactive Forms**: Uso de Reactive Forms para formulários
- **Services**: Injetados via `inject()` do Angular 14+
- **TypeScript Strict**: Modo strict habilitado
- **SCSS**: Uso de SCSS com nesting

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é um exercício educacional.

## 👨‍💻 Autor

Desenvolvido como projeto de prática com Angular e Laravel.

---

**Desenvolvido com ❤️ usando Angular 21**
