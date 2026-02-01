# 🚀 Comandos Úteis - Banco Imobiliário

## 📦 NPM / Node

### Instalação e Atualização
```bash
# Instalar dependências
npm install

# Atualizar dependências
npm update

# Verificar versões desatualizadas
npm outdated

# Limpar cache do npm
npm cache clean --force
```

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm start
# ou
ng serve

# Iniciar com porta específica
ng serve --port 4300

# Abrir automaticamente no navegador
ng serve --open
```

### Build
```bash
# Build de produção
npm run build
# ou
ng build

# Build com watch (desenvolvimento)
npm run watch

# Build com análise de bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/front-end/browser/stats.json
```

### Testes
```bash
# Executar testes unitários
npm test
# ou
ng test

# Executar testes com cobertura
ng test --code-coverage

# Executar testes em modo headless
ng test --watch=false --browsers=ChromeHeadless
```

## 🎨 Angular CLI

### Gerar Componentes
```bash
# Componente standalone
ng generate component nome-componente --standalone

# Componente dentro de um módulo
ng generate component modules/nome-modulo/nome-componente --standalone

# Componente com inline template e styles
ng generate component nome --inline-template --inline-style
```

### Gerar Serviços
```bash
# Serviço
ng generate service services/nome-servico

# Serviço em pasta específica
ng generate service core/services/nome-servico
```

### Gerar Outros Arquivos
```bash
# Interface
ng generate interface models/nome-interface

# Enum
ng generate enum enums/nome-enum

# Guard
ng generate guard guards/nome-guard

# Interceptor
ng generate interceptor interceptors/nome-interceptor

# Pipe
ng generate pipe pipes/nome-pipe

# Directive
ng generate directive directives/nome-directive
```

### Gerar Módulos
```bash
# Módulo
ng generate module modules/nome-modulo

# Módulo com routing
ng generate module modules/nome-modulo --routing
```

## 🔧 Manutenção

### Linting e Formatação
```bash
# Verificar problemas (se ESLint configurado)
npm run lint

# Corrigir automaticamente
npm run lint -- --fix
```

### Análise e Otimização
```bash
# Analisar tamanho do bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/front-end/browser/stats.json

# Build otimizado
ng build --configuration production --optimization --build-optimizer
```

## 🐛 Debug

### Servidor de Desenvolvimento
```bash
# Com source maps
ng serve --source-map

# Modo verbose
ng serve --verbose

# Sem live reload
ng serve --live-reload=false
```

### Análise de Erros
```bash
# Ver logs detalhados
ng build --verbose

# Build sem otimizações (para debug)
ng build --configuration development
```

## 📱 Ambiente Específico

### Development
```bash
ng serve --configuration development
ng build --configuration development
```

### Production
```bash
ng build --configuration production
ng build --prod  # Atalho
```

## 🔄 Git Workflow

### Commits Semânticos
```bash
# Feature
git commit -m "feat: adiciona componente de lista de propriedades"

# Fix
git commit -m "fix: corrige validação do formulário de jogadores"

# Style
git commit -m "style: ajusta espaçamento do header"

# Refactor
git commit -m "refactor: reorganiza estrutura de serviços"

# Docs
git commit -m "docs: atualiza README com instruções de instalação"

# Chore
git commit -m "chore: atualiza dependências do projeto"
```

## 🧹 Limpeza

### Limpar Projeto
```bash
# Remover node_modules
rm -rf node_modules

# Remover dist
rm -rf dist

# Remover cache do Angular
rm -rf .angular

# Reinstalar tudo do zero
rm -rf node_modules package-lock.json
npm install
```

## 📊 Performance

### Análise de Performance
```bash
# Build com análise
ng build --stats-json

# Lighthouse (Chrome DevTools)
# F12 > Lighthouse > Generate Report

# Bundle analyzer
npx webpack-bundle-analyzer dist/front-end/browser/stats.json
```

### Otimizações
```bash
# Lazy loading já implementado ✅
# Tree shaking automático no build de produção ✅
# AOT compilation ativa por padrão ✅
```

## 🚀 Deploy

### Build para Produção
```bash
# Build otimizado
ng build --configuration production

# Build com base href personalizada
ng build --base-href /meu-app/

# Build com URL de deploy
ng build --deploy-url https://cdn.exemplo.com/
```

### Verificar Build
```bash
# Instalar servidor HTTP simples
npm install -g http-server

# Servir pasta dist
cd dist/front-end/browser
http-server -p 8080
```

## 📝 Variáveis de Ambiente

### Criar novo environment
```bash
# Criar arquivo
touch src/environments/environment.staging.ts

# Adicionar em angular.json configurations
```

### Usar environment específico
```bash
ng serve --configuration staging
ng build --configuration staging
```

## 🔍 Inspeção

### Angular DevTools
```bash
# Instalar extensão do Chrome
# https://chrome.google.com/webstore - "Angular DevTools"

# Usar no navegador
# F12 > Angular > Profiler / Components
```

### Source Maps
```bash
# Gerar source maps
ng build --source-map=true

# Analisar no navegador
# F12 > Sources > webpack://
```

## 💡 Dicas Rápidas

```bash
# Ver versão do Angular CLI
ng version

# Ver ajuda de um comando
ng help
ng generate --help

# Atualizar Angular CLI global
npm install -g @angular/cli@latest

# Atualizar projeto Angular
ng update @angular/core @angular/cli

# Verificar atualizações disponíveis
ng update
```

---

**Mantenha esses comandos à mão para facilitar o desenvolvimento! 📌**
