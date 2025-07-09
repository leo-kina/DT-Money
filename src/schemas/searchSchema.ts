import {z} from 'zod'



export const createTransacaoShema = z.object({
    query: z.string()
})