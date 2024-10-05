import "dotenv/config";
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  SECRET_KEY: z.string(),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error("Deu ruim, variavel de ambiente invalida", _env.error.format());
  throw new Error("Deu ruim, variavel de ambiente invalida");
}

export const env = _env.data;
