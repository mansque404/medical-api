import type { IAgendamento, IAgendamentoResponse } from "./agendamento.interface"

export interface IAgendamentoService {
  createAgendamento(agendamento: IAgendamento): Promise<IAgendamentoResponse>
  isHorarioDisponivel(medico: string, dataHorario: string): Promise<boolean>
}
