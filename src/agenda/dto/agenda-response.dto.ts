import type { IMedico, IAgendaResponse } from "../interface/medico.interface"

export class MedicoDto implements IMedico {
  id: number
  nome: string
  especialidade: string
  horarios_disponiveis: string[]

  constructor(medico: IMedico) {
    this.id = medico.id
    this.nome = medico.nome
    this.especialidade = medico.especialidade
    this.horarios_disponiveis = medico.horarios_disponiveis
  }
}

export class AgendaResponseDto implements IAgendaResponse {
  medicos: MedicoDto[]

  constructor(medicos: IMedico[]) {
    this.medicos = medicos.map((medico) => new MedicoDto(medico))
  }
}
