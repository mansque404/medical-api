import "reflect-metadata"
import { container } from "tsyringe"
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { AgendamentoController } from "./agendamento.controller"
import { AgendamentoService } from "../service/agendamento.service"

// Configuração do container de DI
container.registerSingleton("AgendamentoService", AgendamentoService)
container.registerSingleton(AgendamentoController)

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const controller = container.resolve(AgendamentoController)
  return controller.createAgendamento(event)
}
