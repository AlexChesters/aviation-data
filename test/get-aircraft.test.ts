import { getAircraft } from '../src'

describe('getAircraft', () => {
  it('returns an array of the expected type', async () => {
    const data = await getAircraft()

    expect(typeof data[0].name).toEqual('string')
    expect(typeof data[0].value).toEqual('string')
    expect(typeof data[0].icaoCode).toEqual('string')
  })
})
