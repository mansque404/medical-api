import "reflect-metadata"
import { container } from "tsyringe"
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { AgendaController } from "./agenda.controller"
import { AgendaService } from "../service/agenda.service"

// Configuração do container de DI
container.registerSingleton("AgendaService", AgendaService)
container.registerSingleton(AgendaController)

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const controller = container.resolve(AgendaController)
  return controller.getAgendas(event)
}
