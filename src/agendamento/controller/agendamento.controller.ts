import { injectable } from "tsyringe"
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import type { IAgendamentoService } from "../interface/agendamento-service.interface"
import { AgendamentoRequestDto } from "../dto/agendamento-request.dto"
import { ResponseUtil } from "../../utils/response.util"
import { ValidationUtil } from "../../utils/validation.util"

@injectable()
export class AgendamentoController {
  private agendamentoService: IAgendamentoService

  constructor(agendamentoService: IAgendamentoService) {
    this.agendamentoService = agendamentoService
  }

  async createAgendamento(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      if (!event.body) {
        return ResponseUtil.error("Body da requisição é obrigatório", 400)
      }

      const requestData = JSON.parse(event.body)

      // Validação do DTO
      const validation = await ValidationUtil.validateDto(AgendamentoRequestDto, requestData)

      if (!validation.isValid) {
        return ResponseUtil.error("Dados inválidos", 400, validation.errors)
      }

      console.log("Criando agendamento:", validation.dto?.agendamento)

      const response = await this.agendamentoService.createAgendamento(validation.dto!.agendamento)

      console.log("Agendamento criado com sucesso")

      return ResponseUtil.success(response, 201)
    } catch (error) {
      console.error("Erro ao criar agendamento:", error)

      if (error instanceof Error) {
        return ResponseUtil.error(error.message, 400)
      }

      return ResponseUtil.error("Erro interno do servidor", 500)
    }
  }
}
