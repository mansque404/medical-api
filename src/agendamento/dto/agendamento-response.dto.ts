import type { IAgendamento, IAgendamentoResponse } from "../interface/agendamento.interface"

export class AgendamentoResponseDto implements IAgendamentoResponse {
  mensagem: string
  agendamento: IAgendamento

  constructor(agendamento: IAgendamento, mensagem = "Agendamento realizado com sucesso") {
    this.mensagem = mensagem
    this.agendamento = agendamento
  }
}
