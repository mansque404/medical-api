import { validate } from "class-validator"
import { plainToClass } from "class-transformer"

export class ValidationUtil {
  static async validateDto<T extends object>(
    dtoClass: new () => T,
    data: unknown,
  ): Promise<{ isValid: boolean; errors: string[]; dto?: T }> {
    const dto = plainToClass(dtoClass, data)
    const errors = await validate(dto)

    if (errors.length > 0) {
      const errorMessages = errors.flatMap((error) => Object.values(error.constraints || {}))
      return { isValid: false, errors: errorMessages }
    }

    return { isValid: true, errors: [], dto }
  }
}
