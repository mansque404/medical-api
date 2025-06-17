import type { IAgendaResponse } from "./medico.interface"

export interface IAgendaService {
  getAgendas(): Promise<IAgendaResponse>
}
