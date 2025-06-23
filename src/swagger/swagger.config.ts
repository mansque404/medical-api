import swaggerJSDoc from "swagger-jsdoc"

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Agendamento Médico",
      version: "1.0.0",
      description:
        "API RESTful para gerenciamento de agendamentos médicos desenvolvida com Node.js, TypeScript e Serverless Framework",
      contact: {
        name: "Suporte API",
        email: "suporte@agendamento-medico.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de Desenvolvimento",
      },
      {
        url: "https://api.agendamento-medico.com",
        description: "Servidor de Produção",
      },
    ],
    components: {
      schemas: {
        Medico: {
          type: "object",
          required: ["id", "nome", "especialidade", "horarios_disponiveis"],
          properties: {
            id: {
              type: "integer",
              description: "ID único do médico",
              example: 1,
            },
            nome: {
              type: "string",
              description: "Nome completo do médico",
              example: "Dr. João Silva",
            },
            especialidade: {
              type: "string",
              description: "Especialidade médica",
              example: "Cardiologista",
            },
            horarios_disponiveis: {
              type: "array",
              items: {
                type: "string",
                pattern: "^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}$",
                example: "2024-10-05 09:00",
              },
              description: "Lista de horários disponíveis para agendamento",
            },
          },
        },
        AgendaResponse: {
          type: "object",
          required: ["medicos"],
          properties: {
            medicos: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Medico",
              },
              description: "Lista de médicos com horários disponíveis",
            },
          },
        },
        Agendamento: {
          type: "object",
          required: ["medico", "paciente", "data_horario"],
          properties: {
            medico: {
              type: "string",
              description: "Nome do médico",
              example: "Dr. João Silva",
            },
            paciente: {
              type: "string",
              description: "Nome do paciente",
              example: "Carlos Almeida",
            },
            data_horario: {
              type: "string",
              pattern: "^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}$",
              description: "Data e horário do agendamento no formato YYYY-MM-DD HH:MM",
              example: "2024-10-05 09:00",
            },
          },
        },
        AgendamentoRequest: {
          type: "object",
          required: ["agendamento"],
          properties: {
            agendamento: {
              $ref: "#/components/schemas/Agendamento",
            },
          },
        },
        AgendamentoResponse: {
          type: "object",
          required: ["mensagem", "agendamento"],
          properties: {
            mensagem: {
              type: "string",
              description: "Mensagem de confirmação",
              example: "Agendamento realizado com sucesso",
            },
            agendamento: {
              $ref: "#/components/schemas/Agendamento",
            },
          },
        },
        Error: {
          type: "object",
          required: ["error"],
          properties: {
            error: {
              type: "string",
              description: "Mensagem de erro",
              example: "Dados inválidos",
            },
            details: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Detalhes adicionais do erro",
              example: ["Nome do médico é obrigatório", "Data e horário devem estar no formato YYYY-MM-DD HH:MM"],
            },
          },
        },
      },
      responses: {
        BadRequest: {
          description: "Requisição inválida",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        InternalServerError: {
          description: "Erro interno do servidor",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Agendas",
        description: "Operações relacionadas às agendas dos médicos",
      },
      {
        name: "Agendamentos",
        description: "Operações relacionadas aos agendamentos de consultas",
      },
    ],
  },
  apis: ["./src/**/*.ts"],
}

export const swaggerSpec = swaggerJSDoc(options)
