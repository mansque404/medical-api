import { injectable } from "tsyringe"
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import type { IAgendaService } from "../interface/agenda-service.interface"
import { ResponseUtil } from "../../utils/response.util"

@injectable()
export class AgendaController {
  private agendaService: IAgendaService

  constructor(agendaService: IAgendaService) {
    this.agendaService = agendaService
  }

  async getAgendas(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      console.log("Buscando agendas disponíveis...")

      const agendas = await this.agendaService.getAgendas()

      console.log(`Encontradas ${agendas.medicos.length} agendas`)

      return ResponseUtil.success(agendas)
    } catch (error) {
      console.error("Erro ao buscar agendas:", error)
      return ResponseUtil.error("Erro interno do servidor", 500)
    }
  }
}
