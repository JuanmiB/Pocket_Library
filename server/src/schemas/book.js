import z from 'zod'

const bookSchema = z.object({
  title: z.string().min(2).max(255),
  description: z.string().min(2).max(255),
  pages: z.number().min(1),
  author: z.string().min(2).max(255),
  year: z.number().min(1),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Book genre is required.',
      invalid_type_error: 'Book genre must be an array of enum Genre'
    }
  )
})

export const validateBook = async (book) => {
  return bookSchema.safeParse(book)
}
export function validateBookUpdate (book) {
  return bookSchema.partial().safeParse(book)
}
