import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import purgecss from 'astro-purgecss'

import { loadEnv } from './dotenv.config'
loadEnv()

const baseURL = process.env.ASTRO_BASE_URL

export default defineConfig({
  // Jika baseURL ada nilai → gunakan sebagai site
  // Jika tidak ada → biarkan undefined (AMAN di Cloudflare)
  site: baseURL && baseURL !== '/' ? baseURL : undefined,

  base: '/',

  integrations: [
    purgecss(),
    compress(),
  ],
})
