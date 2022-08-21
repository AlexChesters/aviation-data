import fs from 'fs'
import { promisify } from 'util'
import path from 'path'

const DATA_DIRECTORY = path.join(__dirname, '../../', 'data')

const readFile = promisify(fs.readFile)

type Frequency = {
  id: string,
  identifier: string,
  type: string,
  description: string,
  frequency: string
}

type Runway = {
  id: string,
  airportIdentifier: string,
  length: string,
  width: string,
  surface: string,
  lighted: string,
  closed: string,
  leIdent: string,
  leDisplacedThreshold: string,
  heIdent: string,
  heDisplacedThreshold: string
}

type Airfield = {
  id: string,
  identifier: string,
  type: string,
  name: string,
  latitude: string,
  longitude: string,
  elevation: string,
  continent: string,
  country: string,
  region: string,
  municipality: string,
  scheduledService: string,
  gpsCode: string,
  iataCode: string,
  localCode: string,
  frequencies: Frequency[],
  runways: Runway[]
}

export default async (): Promise<Airfield[]> => {
  const data = await readFile(path.join(DATA_DIRECTORY, 'airfields.json'), 'utf-8')

  return JSON.parse(data)
}
