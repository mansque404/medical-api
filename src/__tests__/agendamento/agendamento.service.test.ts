import "reflect-metadata"
import { AgendamentoService } from "../../agendamento/service/agendamento.service"
import { AgendamentosMock } from "../../agendamento/mocks/agendamentos.mock"
import type { IAgendamento } from "../../agendamento/interface/agendamento.interface"

describe("AgendamentoService", () => {
  let agendamentoService: AgendamentoService

  beforeEach(() => {
    agendamentoService = new AgendamentoService()
    AgendamentosMock.reset()
  })

  describe("createAgendamento", () => {
    it("should create appointment successfully", async () => {
      const agendamento: IAgendamento = {
        medico: "Dr. João Silva",
        paciente: "Carlos Almeida",
        data_horario: "2024-10-05 09:00",
      }

      const result = await agendamentoService.createAgendamento(agendamento)

      expect(result).toBeDefined()
      expect(result.mensagem).toBe("Agendamento realizado com sucesso")
      expect(result.agendamento).toEqual(agendamento)
    })

    it("should throw error for unavailable time slot", async () => {
      const agendamento: IAgendamento = {
        medico: "Dr. João Silva",
        paciente: "Carlos Almeida",
        data_horario: "2024-10-05 09:00",
      }

      // Primeiro agendamento
      await agendamentoService.createAgendamento(agendamento)

      // Segundo agendamento no mesmo horário
      const segundoAgendamento: IAgendamento = {
        medico: "Dr. João Silva",
        paciente: "Maria Silva",
        data_horario: "2024-10-05 09:00",
      }

      await expect(agendamentoService.createAgendamento(segundoAgendamento)).rejects.toThrow(
        "Horário não disponível para este médico",
      )
    })

    it("should throw error for non-existent doctor", async () => {
      const agendamento: IAgendamento = {
        medico: "Dr. Inexistente",
        paciente: "Carlos Almeida",
        data_horario: "2024-10-05 09:00",
      }

      await expect(agendamentoService.createAgendamento(agendamento)).rejects.toThrow(
        "Horário não disponível para este médico",
      )
    })
  })

  describe("isHorarioDisponivel", () => {
    it("should return true for available time slot", async () => {
      const result = await agendamentoService.isHorarioDisponivel("Dr. João Silva", "2024-10-05 09:00")

      expect(result).toBe(true)
    })

    it("should return false for non-existent doctor", async () => {
      const result = await agendamentoService.isHorarioDisponivel("Dr. Inexistente", "2024-10-05 09:00")

      expect(result).toBe(false)
    })

    it("should return false for unavailable time slot", async () => {
      const result = await agendamentoService.isHorarioDisponivel("Dr. João Silva", "2024-10-05 12:00")

      expect(result).toBe(false)
    })

    it("should return false for already booked time slot", async () => {
      const agendamento: IAgendamento = {
        medico: "Dr. João Silva",
        paciente: "Carlos Almeida",
        data_horario: "2024-10-05 09:00",
      }

      await agendamentoService.createAgendamento(agendamento)

      const result = await agendamentoService.isHorarioDisponivel("Dr. João Silva", "2024-10-05 09:00")

      expect(result).toBe(false)
    })
  })
})
