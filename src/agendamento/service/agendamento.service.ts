import { injectable } from "tsyringe"
import type { IAgendamentoService } from "../interface/agendamento-service.interface"
import type { IAgendamento, IAgendamentoResponse } from "../interface/agendamento.interface"
import { AgendamentoResponseDto } from "../dto/agendamento-response.dto"
import { AgendamentosMock } from "../mocks/agendamentos.mock"
import { medicosMock } from "../../agenda/mocks/medicos.mock"

@injectable()
export class AgendamentoService implements IAgendamentoService {
  async createAgendamento(agendamento: IAgendamento): Promise<IAgendamentoResponse> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const isDisponivel = await this.isHorarioDisponivel(agendamento.medico, agendamento.data_horario)

    if (!isDisponivel) {
      throw new Error("Horário não disponível para este médico")
    }

    AgendamentosMock.addAgendamento(agendamento)

    return new AgendamentoResponseDto(agendamento)
  }

  async isHorarioDisponivel(medico: string, dataHorario: string): Promise<boolean> {
    // Verifica se o médico existe e tem o horário disponível
    const medicoEncontrado = medicosMock.find((m) => m.nome === medico)

    if (!medicoEncontrado) {
      return false
    }

    // Verifica se o horário está na lista de horários disponíveis
    const horarioDisponivel = medicoEncontrado.horarios_disponiveis.includes(dataHorario)

    if (!horarioDisponivel) {
      return false
    }

    // Verifica se já existe um agendamento para este médico neste horário
    const jaAgendado = AgendamentosMock.existeAgendamento(medico, dataHorario)

    return !jaAgendado
  }
}
