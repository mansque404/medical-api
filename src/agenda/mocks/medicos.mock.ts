import type { IMedico } from "../interface/medico.interface"

export const medicosMock: IMedico[] = [
  {
    id: 1,
    nome: "Dr. João Silva",
    especialidade: "Cardiologista",
    horarios_disponiveis: [
      "2024-10-05 09:00",
      "2024-10-05 10:00",
      "2024-10-05 11:00",
      "2024-10-06 09:00",
      "2024-10-06 10:00",
    ],
  },
  {
    id: 2,
    nome: "Dra. Maria Souza",
    especialidade: "Dermatologista",
    horarios_disponiveis: ["2024-10-06 14:00", "2024-10-06 15:00", "2024-10-07 14:00", "2024-10-07 15:00"],
  },
  {
    id: 3,
    nome: "Dr. Carlos Oliveira",
    especialidade: "Ortopedista",
    horarios_disponiveis: ["2024-10-05 08:00", "2024-10-05 14:00", "2024-10-05 16:00"],
  },
  {
    id: 4,
    nome: "Dra. Ana Costa",
    especialidade: "Pediatra",
    horarios_disponiveis: [
      "2024-10-06 08:00",
      "2024-10-06 09:00",
      "2024-10-06 10:00",
      "2024-10-07 08:00",
      "2024-10-07 09:00",
    ],
  },
]
