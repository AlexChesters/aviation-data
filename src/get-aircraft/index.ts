import fs from 'fs'
import { promisify } from 'util'
import path from 'path'

const DATA_DIRECTORY = path.join(__dirname, '../../', 'data')

const readFile = promisify(fs.readFile)

type Aircraft = {
  name: string,
  value: string,
  icaoCode: string
}

export default async (): Promise<Aircraft[]> => {
  const data = await readFile(path.join(DATA_DIRECTORY, 'aircraft.json'), 'utf-8')

  return JSON.parse(data)
}
