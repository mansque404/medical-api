import { ResponseUtil } from "../../utils/response.util"

describe("ResponseUtil", () => {
  describe("success", () => {
    it("should return success response with default status code", () => {
      const data = { message: "Success" }
      const result = ResponseUtil.success(data)

      expect(result.statusCode).toBe(200)
      expect(result.headers["Content-Type"]).toBe("application/json")
      expect(JSON.parse(result.body)).toEqual(data)
    })

    it("should return success response with custom status code", () => {
      const data = { message: "Created" }
      const result = ResponseUtil.success(data, 201)

      expect(result.statusCode).toBe(201)
      expect(JSON.parse(result.body)).toEqual(data)
    })
  })

  describe("error", () => {
    it("should return error response with default status code", () => {
      const message = "Internal Server Error"
      const result = ResponseUtil.error(message)

      expect(result.statusCode).toBe(500)
      expect(result.headers["Content-Type"]).toBe("application/json")

      const body = JSON.parse(result.body)
      expect(body.error).toBe(message)
    })

    it("should return error response with custom status code and details", () => {
      const message = "Bad Request"
      const details = ["Field is required"]
      const result = ResponseUtil.error(message, 400, details)

      expect(result.statusCode).toBe(400)

      const body = JSON.parse(result.body)
      expect(body.error).toBe(message)
      expect(body.details).toEqual(details)
    })
  })
})
