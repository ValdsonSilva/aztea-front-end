import { z } from "zod/v4";


export const loginSchema = z.object({
    email: z.email({error: "Invalid e-mail"}),
    password: z.string().min(6, {error: "The passaword should have 6 caracters in the minimun"})
})

// Inferência do tipo para usar com TS
export type LoginForm = z.infer<typeof loginSchema>