import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'

function notConfigured() {
  return new Response('Keystatic GitHub mode is not configured', { status: 503 })
}

const isGithubReady = Boolean(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET,
)

const handlers = isGithubReady
  ? makeRouteHandler({ config: keystaticConfig })
  : {
      GET: notConfigured,
      POST: notConfigured,
    }

export const { GET, POST } = handlers
