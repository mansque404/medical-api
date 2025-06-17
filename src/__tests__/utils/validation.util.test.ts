import { ValidationUtil } from "../../utils/validation.util"
import { AgendamentoRequestDto } from "../../agendamento/dto/agendamento-request.dto"

describe("ValidationUtil", () => {
  describe("validateDto", () => {
    it("should validate correct agendamento request", async () => {
      const validData = {
        agendamento: {
          medico: "Dr. João Silva",
          paciente: "Carlos Almeida",
          data_horario: "2024-10-05 09:00",
        },
      }

      const result = await ValidationUtil.validateDto(AgendamentoRequestDto, validData)

      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
      expect(result.dto).toBeDefined()
    })

    it("should return errors for invalid data", async () => {
      const invalidData = {
        agendamento: {
          medico: "",
          paciente: "",
          data_horario: "invalid-date",
        },
      }

      const result = await ValidationUtil.validateDto(AgendamentoRequestDto, invalidData)

      expect(result.isValid).toBe(false)
      expect(result.errors.length).toBeGreaterThan(0)
    })

    it("should return errors for missing fields", async () => {
      const invalidData = {
        agendamento: {},
      }

      const result = await ValidationUtil.validateDto(AgendamentoRequestDto, invalidData)

      expect(result.isValid).toBe(false)
      expect(result.errors.length).toBeGreaterThan(0)
    })
  })
})
