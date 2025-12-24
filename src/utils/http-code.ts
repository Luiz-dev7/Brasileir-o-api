import { httpResponse } from "../model/http-response-model"

// ✅ Sucesso
export const ok = async (data:any): Promise<httpResponse> =>{
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<httpResponse> =>{
    return{
        statusCode: 201,
        body:{message:"sucesso"}
    }
}

export const noContent = async(): Promise<httpResponse> =>{
    return{
        statusCode: 204,
        body: null
    }
}

// ⚠️ Erros do cliente
export const badRequest = async (message?:string): Promise<httpResponse> =>{
    return {
        statusCode: 400,
        body: {message: message ?? "requisição inválida"},
    }
}

export const unauthorized = async (): Promise<httpResponse> =>{
    return {
        statusCode: 401,
        body: {message: "não autorizado"}
    }
}

export const forbidden = async (): Promise<httpResponse> =>{
    return {
        statusCode: 403,
        body: {message: "acesso negado"}
    }
}

export const notFound = async (): Promise<httpResponse> =>{
    return {
        statusCode: 404,
        body: {message: "conteúdo não encontrado"}
    }
}

export const conflict = async (): Promise<httpResponse> =>{
    return {
        statusCode: 409,
        body: {message: "conflito de dados"}
    }
}

export const unprocessableEntity = async (): Promise<httpResponse> =>{
    return {
        statusCode: 422,
        body: {message: "entidade não processável"}
    }
}

// 💥 Erros do servidor
export const internalServerError = async (): Promise<httpResponse> =>{
    return {
        statusCode: 500,
        body: {message: "erro no servidor"}
    }
}

export const badGateway = async (): Promise<httpResponse> =>{
    return {
        statusCode: 502,
        body: {message: "gateway inválido"}
    }
}

export const serviceUnavailable = async (): Promise<httpResponse> =>{
    return {
        statusCode: 503,
        body: {message: "serviço indisponível"}
    }
}

export const gatewayTimeout = async (): Promise<httpResponse> =>{
    return {
        statusCode: 504,
        body: {message: "tempo limite excedido"}
    }
}