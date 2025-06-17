import { IsNotEmpty, IsString, Matches } from "class-validator"
import { Type } from "class-transformer"

export class AgendamentoDto {
  @IsNotEmpty({ message: "Nome do médico é obrigatório" })
  @IsString({ message: "Nome do médico deve ser uma string" })
  medico: string

  @IsNotEmpty({ message: "Nome do paciente é obrigatório" })
  @IsString({ message: "Nome do paciente deve ser uma string" })
  paciente: string

  @IsNotEmpty({ message: "Data e horário são obrigatórios" })
  @IsString({ message: "Data e horário devem ser uma string" })
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/, {
    message: "Data e horário devem estar no formato YYYY-MM-DD HH:MM",
  })
  data_horario: string
}

export class AgendamentoRequestDto {
  @Type(() => AgendamentoDto)
  agendamento: AgendamentoDto
}
