import { getAirfields } from '../src'

describe('getAirfields', () => {
  it('returns an array of the expected type', async () => {
    const data = await getAirfields()

    expect(typeof data[0].id).toEqual('string')
    expect(typeof data[0].identifier).toEqual('string')
    expect(typeof data[0].type).toEqual('string')
    expect(typeof data[0].name).toEqual('string')
    expect(typeof data[0].latitude).toEqual('number')
    expect(typeof data[0].longitude).toEqual('number')
    expect(typeof data[0].elevation).toEqual('number')
    expect(typeof data[0].continent).toEqual('string')
    expect(typeof data[0].country).toEqual('string')
    expect(typeof data[0].region).toEqual('string')
    expect(typeof data[0].municipality).toEqual('string')
    expect(typeof data[0].scheduledService).toEqual('boolean')
    expect(typeof data[0].gpsCode).toEqual('string')
    expect(typeof data[0].iataCode).toEqual('string')
    expect(typeof data[0].localCode).toEqual('string')
    expect(typeof data[0].frequencies).toEqual('object')
    expect(typeof data[0].runways).toEqual('object')
  })
})
