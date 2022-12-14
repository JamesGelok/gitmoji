import type { NextApiRequest, NextApiResponse } from 'next'

import gitmojisData from 'src/data/gitmojis.json'

type Data = typeof gitmojisData | { error: string }

const gitmojis = (
  request: NextApiRequest,
  response: NextApiResponse<Data>
): void => {
  const { method } = request

  if (method === 'GET') {
    response.status(200).json(gitmojisData)
    return
  }

  response.setHeader('Allow', ['GET'])
  response.status(405).json({ error: `Error: method ${method} not allowed` })
}

export default gitmojis
