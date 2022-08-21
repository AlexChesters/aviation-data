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
  length: number,
  width: number,
  surface: string,
  lighted: boolean,
  closed: boolean,
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
  latitude: number,
  longitude: number,
  elevation: number,
  continent: string,
  country: string,
  region: string,
  municipality: string,
  scheduledService: boolean,
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
