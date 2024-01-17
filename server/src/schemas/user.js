import z from 'zod'

const userSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
  role: z.enum(['ADMIN_ROLE', 'USER_ROLE'])
})
export function validateUser (user) {
  return userSchema.safeParse(user)
}
export function validateUserUpdate (user) {
  return userSchema.partial().safeParse(user)
}
