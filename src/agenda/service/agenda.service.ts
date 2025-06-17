import { injectable } from "tsyringe"
import type { IAgendaService } from "../interface/agenda-service.interface"
import type { IAgendaResponse } from "../interface/medico.interface"
import { medicosMock } from "../mocks/medicos.mock"
import { AgendaResponseDto } from "../dto/agenda-response.dto"

@injectable()
export class AgendaService implements IAgendaService {
  async getAgendas(): Promise<IAgendaResponse> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    return new AgendaResponseDto(medicosMock)
  }
}
