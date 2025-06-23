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

  /**
   * @swagger
   * /agendas:
   *   get:
   *     summary: Buscar agendas e horários dos médicos
   *     description: Retorna uma lista de médicos com suas respectivas agendas e horários disponíveis
   *     tags: [Agendas]
   *     responses:
   *       200:
   *         description: Lista de médicos com horários disponíveis retornada com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AgendaResponse'
   *             example:
   *               medicos:
   *                 - id: 1
   *                   nome: "Dr. João Silva"
   *                   especialidade: "Cardiologista"
   *                   horarios_disponiveis:
   *                     - "2024-10-05 09:00"
   *                     - "2024-10-05 10:00"
   *                     - "2024-10-05 11:00"
   *                 - id: 2
   *                   nome: "Dra. Maria Souza"
   *                   especialidade: "Dermatologista"
   *                   horarios_disponiveis:
   *                     - "2024-10-06 14:00"
   *                     - "2024-10-06 15:00"
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
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
