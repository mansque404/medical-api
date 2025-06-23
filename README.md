# API de Agendamento Médico

Uma API RESTful desenvolvida com Node.js, TypeScript, Serverless Framework e AWS Lambda para gerenciamento de agendamentos médicos.

## 🚀 Tecnologias Utilizadas

- **Node.js** (v18+)
- **TypeScript**
- **Serverless Framework**
- **AWS Lambda**
- **Jest** (Testes)
- **TSyringe** (Dependency Injection)
- **Class-validator** (Validação)
- **ESLint + Prettier** (Code Quality)

## 📋 Funcionalidades

### Endpoints Disponíveis

#### 1. Buscar Agendas dos Médicos
- **Método:** GET
- **Rota:** `/agendas`
- **Descrição:** Retorna lista de médicos com horários disponíveis

**Resposta:**
\`\`\`json
{
  "medicos": [
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2024-10-05 09:00",
        "2024-10-05 10:00",
        "2024-10-05 11:00"
      ]
    }
  ]
}
\`\`\`

#### 2. Marcar Agendamento
- **Método:** POST
- **Rota:** `/agendamento`
- **Descrição:** Cria um novo agendamento

**Payload:**
\`\`\`json
{
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }
}
\`\`\`

**Resposta:**
\`\`\`json
{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }
}
\`\`\`

## 📚 Documentação da API

A API possui documentação completa usando Swagger/OpenAPI 3.0.

### Acessando a Documentação

#### Desenvolvimento Local
- **Swagger UI:** http://localhost:3000/docs
- **JSON Schema:** http://localhost:3000/swagger.json

#### Produção
- **Swagger UI:** https://api.agendamento-medico.com/docs
- **JSON Schema:** https://api.agendamento-medico.com/swagger.json

### Recursos da Documentação

- **Interface interativa** para testar endpoints
- **Esquemas detalhados** de request/response
- **Exemplos práticos** para cada endpoint
- **Validações e formatos** de dados
- **Códigos de status** e tratamento de erros

### Testando via Swagger UI

1. Acesse http://localhost:3000/docs
2. Explore os endpoints disponíveis
3. Use o botão "Try it out" para testar
4. Visualize as respostas em tempo real

## 🏗️ Arquitetura

O projeto segue uma arquitetura limpa e modular:

\`\`\`
src/
├── agenda/
│   ├── controller/
│   ├── service/
│   ├── dto/
│   ├── interface/
│   └── mocks/
├── agendamento/
│   ├── controller/
│   ├── service/
│   ├── dto/
│   ├── interface/
│   └── mocks/
├── utils/
└── __tests__/
\`\`\`

### Padrões de Design Implementados

- **Dependency Injection:** Usando TSyringe para inversão de controle
- **DTO Pattern:** Para validação e transformação de dados
- **Repository Pattern:** Para abstração de dados (simulado com mocks)
- **Controller-Service Pattern:** Separação de responsabilidades

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js v18 ou superior
- npm ou yarn
- Serverless Framework CLI

### Instalação

1. Clone o repositório:
\`\`\`bash
git clone <repository-url>
cd medical-appointment-api
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Instale o Serverless Framework globalmente (se não tiver):
\`\`\`bash
npm install -g serverless
\`\`\`

## 🚀 Executando o Projeto

### Desenvolvimento Local

Para executar a API localmente:

\`\`\`bash
npm run dev
\`\`\`

A API estará disponível em: `http://localhost:3000`

### Testando os Endpoints

#### Via Swagger UI (Recomendado)
Acesse http://localhost:3000/docs para uma interface interativa completa.

#### Via cURL

##### 1. Buscar Agendas
\`\`\`bash
curl -X GET http://localhost:3000/agendas
\`\`\`

##### 2. Criar Agendamento
\`\`\`bash
curl -X POST http://localhost:3000/agendamento \
  -H "Content-Type: application/json" \
  -d '{
    "agendamento": {
      "medico": "Dr. João Silva",
      "paciente": "Carlos Almeida",
      "data_horario": "2024-10-05 09:00"
    }
  }'
\`\`\`

##### 3. Acessar Documentação
\`\`\`bash
# Swagger UI
curl -X GET http://localhost:3000/docs

# JSON Schema
curl -X GET http://localhost:3000/swagger.json
\`\`\`

## 🧪 Testes

### Executar Testes

\`\`\`bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage
\`\`\`

### Cobertura de Testes

Os testes cobrem:
- Services (lógica de negócio)
- Validações
- Utilities
- Casos de erro e sucesso

## 📝 Scripts Disponíveis

\`\`\`bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Compila TypeScript
npm test             # Executa testes
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Executa testes com coverage
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint
npm run format       # Formata código com Prettier
npm run deploy       # Deploy para AWS
\`\`\`

## 🚀 Deploy

### Deploy para AWS

1. Configure suas credenciais AWS:
\`\`\`bash
aws configure
\`\`\`

2. Execute o deploy:
\`\`\`bash
npm run deploy
\`\`\`

### Deploy para Staging/Production

\`\`\`bash
# Deploy para staging
serverless deploy --stage staging

# Deploy para production
serverless deploy --stage production
\`\`\`

## 🔧 Configuração

### Variáveis de Ambiente

O projeto usa as seguintes variáveis de ambiente:

- `NODE_ENV`: Ambiente de execução (dev, staging, production)

### Configuração do Serverless

O arquivo `serverless.yml` contém todas as configurações necessárias para o deploy na AWS.

## 📊 Validações

A API implementa validações robustas:

- **Campos obrigatórios:** Médico, paciente e data/horário
- **Formato de data:** YYYY-MM-DD HH:MM
- **Disponibilidade:** Verifica se o horário está disponível
- **Existência do médico:** Valida se o médico existe

## 🐛 Tratamento de Erros

A API retorna erros padronizados:

- **400:** Bad Request (dados inválidos)
- **404:** Not Found (recurso não encontrado)
- **500:** Internal Server Error (erro interno)


## 👥 Contribuição

Este projeto foi desenvolvido seguindo as melhores práticas de:
- Arquitetura de software
- Padrões de design
- Desenvolvimento backend
- Testes automatizados
- Serverless Framework
- AWS Lambda
