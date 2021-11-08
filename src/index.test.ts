import got from 'got'

describe('Test Description', () => {
  it('TestName', () => {
    expect(1).toBe(1)
  })

  it('test main endpoint', async () => {
    const res: any = await got(`http://localhost:3000/`).json()

    expect(res.foo).toEqual('bar')
  })
})
