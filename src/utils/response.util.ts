import type { APIGatewayProxyResult } from "aws-lambda"

export class ResponseUtil {
  static success<T>(data: T, statusCode = 200): APIGatewayProxyResult {
    return {
      statusCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(data),
    }
  }

  static error(message: string, statusCode = 500, details?: unknown): APIGatewayProxyResult {
    return {
      statusCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        error: message,
        details,
      }),
    }
  }
}
