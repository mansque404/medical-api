export interface IAgendamento {
  medico: string
  paciente: string
  data_horario: string
}

export interface IAgendamentoRequest {
  agendamento: IAgendamento
}

export interface IAgendamentoResponse {
  mensagem: string
  agendamento: IAgendamento
}
