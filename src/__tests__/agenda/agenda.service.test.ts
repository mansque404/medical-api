import "reflect-metadata"
import { AgendaService } from "../../agenda/service/agenda.service"

describe("AgendaService", () => {
  let agendaService: AgendaService

  beforeEach(() => {
    agendaService = new AgendaService()
  })

  describe("getAgendas", () => {
    it("should return list of doctors with available schedules", async () => {
      const result = await agendaService.getAgendas()

      expect(result).toBeDefined()
      expect(result.medicos).toBeInstanceOf(Array)
      expect(result.medicos.length).toBeGreaterThan(0)

      const firstDoctor = result.medicos[0]
      expect(firstDoctor).toHaveProperty("id")
      expect(firstDoctor).toHaveProperty("nome")
      expect(firstDoctor).toHaveProperty("especialidade")
      expect(firstDoctor).toHaveProperty("horarios_disponiveis")
      expect(firstDoctor.horarios_disponiveis).toBeInstanceOf(Array)
    })

    it("should return doctors with correct data structure", async () => {
      const result = await agendaService.getAgendas()

      result.medicos.forEach((medico) => {
        expect(typeof medico.id).toBe("number")
        expect(typeof medico.nome).toBe("string")
        expect(typeof medico.especialidade).toBe("string")
        expect(Array.isArray(medico.horarios_disponiveis)).toBe(true)

        medico.horarios_disponiveis.forEach((horario) => {
          expect(typeof horario).toBe("string")
          expect(horario).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/)
        })
      })
    })
  })
})
