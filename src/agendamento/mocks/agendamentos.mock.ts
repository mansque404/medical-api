import type { IAgendamento } from "../interface/agendamento.interface"

export class AgendamentosMock {
  private static agendamentos: IAgendamento[] = []

  static getAgendamentos(): IAgendamento[] {
    return [...this.agendamentos]
  }

  static addAgendamento(agendamento: IAgendamento): void {
    this.agendamentos.push(agendamento)
  }

  static existeAgendamento(medico: string, dataHorario: string): boolean {
    return this.agendamentos.some(
      (agendamento) => agendamento.medico === medico && agendamento.data_horario === dataHorario,
    )
  }

  static reset(): void {
    this.agendamentos = []
  }
}
