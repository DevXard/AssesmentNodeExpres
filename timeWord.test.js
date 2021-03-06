const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('Test diferent times', () => {
  test('test Noon', () => {
    let res = timeWord("12:00")
    expect(res).toEqual("Noon ")
  })
  test(' Midnight', () => {
    let res = timeWord("00:00")
    expect(res).toEqual("Midnight ")
  })
})

describe('Test diferent times', () => {
  test('test timestamp', () => {
    let res = timeWord("11:20")
    expect(res).toEqual("eleven twenty")
  })

  test('test timestamp', () => {
    let res = timeWord("11:43")
    expect(res).toEqual("eleven forty three")
  })

  test('test timestamp', () => {
    let res = timeWord("13:00")
    expect(res).toEqual("one o\'clock ")
  })
  test('test timestamp', () => {
    let res = timeWord("12:01")
    expect(res).toEqual("twelve oh one")
  })
  test('test timestamp', () => {
    let res = timeWord("00:01")
    expect(res).toEqual("twelve oh one")
  })
})