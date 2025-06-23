import { swaggerSpec } from "../../swagger/swagger.config"

describe("Swagger Configuration", () => {
  it("should have valid swagger specification", () => {
    expect(swaggerSpec).toBeDefined()
    expect(swaggerSpec.openapi).toBe("3.0.0")
    expect(swaggerSpec.info).toBeDefined()
    expect(swaggerSpec.info.title).toBe("API de Agendamento Médico")
    expect(swaggerSpec.info.version).toBe("1.0.0")
  })

  it("should have required components schemas", () => {
    expect(swaggerSpec.components).toBeDefined()
    expect(swaggerSpec.components.schemas).toBeDefined()
    expect(swaggerSpec.components.schemas.Medico).toBeDefined()
    expect(swaggerSpec.components.schemas.Agendamento).toBeDefined()
    expect(swaggerSpec.components.schemas.AgendaResponse).toBeDefined()
    expect(swaggerSpec.components.schemas.AgendamentoRequest).toBeDefined()
    expect(swaggerSpec.components.schemas.AgendamentoResponse).toBeDefined()
  })

  it("should have required servers configuration", () => {
    expect(swaggerSpec.servers).toBeDefined()
    expect(swaggerSpec.servers).toHaveLength(2)
    expect(swaggerSpec.servers[0].url).toBe("http://localhost:3000")
    expect(swaggerSpec.servers[1].url).toBe("https://api.agendamento-medico.com")
  })

  it("should have required tags", () => {
    expect(swaggerSpec.tags).toBeDefined()
    expect(swaggerSpec.tags).toHaveLength(2)
    expect(swaggerSpec.tags[0].name).toBe("Agendas")
    expect(swaggerSpec.tags[1].name).toBe("Agendamentos")
  })
})
