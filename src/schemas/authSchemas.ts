import { z } from "zod";
import { ERole } from "../enums/ERole";

// USER

export const userRegistrationSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string(),
    role: z.nativeEnum(ERole)
})

export type UserRegister = z.infer<typeof userRegistrationSchema>


// USER MONGO

export const userMongoSchema = userRegistrationSchema.extend({
    _id: z.string()
})

export type UserMongo = z.infer<typeof userMongoSchema>

// USER COOKIE

export const userCookieSchema = z.object({
    sub: z.string(),
    role:z.nativeEnum(ERole)
})

export type UserCookie = z.infer<typeof userCookieSchema>

// LOGIN DATA

export const loginDataSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export type UserLogin = z.infer<typeof loginDataSchema>