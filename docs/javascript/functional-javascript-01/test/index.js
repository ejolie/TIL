const { expect } = require('chai');

Object.assign(global, require('../index.js'));

describe('take', function () {
  it('take(1, [1, 2, 3])', () => {
    expect(take(1, [1, 2, 3])).to.eql([1]);
  });
  it('take(2, [1, 2, 3])', () => {
    expect(take(2, [1, 2, 3])).to.eql([1, 2]);
  });

  it('take(2, L.map(a => a + 1, [1, 2, 3]))', () => {
    expect(take(2, L.map(a => a + 1, [1, 2, 3]))).to.eql([2, 3]);
  });

  it('take(2, L.filter(a => a % 2, [1, 2, 3, 4, 5]))', () => {
    expect(take(2, L.filter(a => a % 2, [1, 2, 3, 4, 5]))).to.eql([1, 3]);
  });

  it('take(2, L.map(a => Promise.resolve(a + 1), [1, 2, 3]))', () => {
    go1(
      take(2, L.map(a => Promise.resolve(a + 1), [1, 2, 3])),
      _ => expect(_).to.eql([2, 3])
    );
  });

  it('take(2, L.filter(a => Promise.resolve(a % 2), [1, 2, 3, 4, 5]))', () => {
    go1(
      take(2, L.filter(a => Promise.resolve(a % 2), [1, 2, 3])),
      _ => expect(_).to.eql([1, 3])
    );
  });
});

describe('reduce', function () {
  const add = (a, b) => a + b;
  it('reduce(add, [1, 2, 3])', () => {
    expect(reduce(add, [1, 2, 3])).to.eql(6);
  });
  it('reduce(add, 10, [1, 2, 3])', () => {
    expect(reduce(add, 10, [1, 2, 3])).to.eql(16);
  });
  it('reduce(add, [Promise.resolve(1), 2, 3])', () => {
    go1(reduce(add, [Promise.resolve(1), 2, 3]), _ => expect(_).to.eql(6));
  });
  it('reduce(add, L.filter(a => a % 2, [1, 2, 3, 4]))', () => {
    expect(reduce(add, L.filter(a => a % 2, [1, 2, 3, 4]))).to.eql(4);
  });
  it('reduce(add, L.filter(a => Promise.resolve(a % 2), [1, 2, 3, 4]))', () => {
    go1(reduce(add, L.filter(a => Promise.resolve(a % 2), [1, 2, 3, 4])), _ => expect(_).to.eql(4));
  });
  it('reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => a + 10, [1, 2, 3, 4])))', () => {
    go1(reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => a + 10, [1, 2, 3, 4]))), _ => expect(_).to.eql(24));
  });
  it('reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => Promise.resolve(a + 10), [1, 2, 3, 4])))', () => {
    go1(reduce(add, L.filter(a => Promise.resolve(a % 2), L.map(a => Promise.resolve(a + 10), [1, 2, 3, 4]))), _ => expect(_).to.eql(24));
  });
});

describe('C.take', function () {
  function delay(val, time = 1000) {
    return new Promise(resolve => setTimeout(_ => resolve(val), time));
  }

  it('C.take(2, L.map(a => delay(a, a * 100), [1, 2, 3]))', () => {
    go1(
      C.take(2, L.map(a => delay(a, 100), [1, 2, 3])),
      _ => expect(_).to.eql([1, 2])
    );
  });

  it('C.take(2, L.filter(a => delay(a % 2, a * 100), [1, 2, 3]))', () => {
    go1(
      C.take(2, L.filter(a => delay(a % 2, 100), [1, 2, 3])),
      _ => expect(_).to.eql([1, 3])
    );
  });
});

describe('map', function () {
  return;
  function delay(val, time = 1000) {
    return new Promise(resolve => setTimeout(_ => resolve(val), time));
  }

  it('map(a => delay(a+10, 1000), [1, 2, 3])', async function() {
    expect(await map(a => a + 10, [Promise.resolve(1), 2, 3])).to.eql([11, 12, 13]);
  });

  it('map(a => delay(a+10, 1000), [1, 2, 3])', async function() {
    this.timeout(5000);
    expect(await map(a => delay(a+10, 1000), [1, 2, 3])).to.eql([11, 12, 13]);
  });

  it('C.map(a => delay(a+10, 1000), [1, 2, 3])', async function() {
    this.timeout(1500);
    expect(await C.map(a => delay(a+10, 1000), [1, 2, 3])).to.eql([11, 12, 13]);
  });
});

describe('find', function () {
  it('find(a => a > 1, [1, 2, 3])', function() {
    expect(find(a => a > 1, [1, 2, 3])).to.eql(2);
  });
});

describe('go', function () {
  it(`
    go(
      0,
      a => a + 1,
      a => a + 10,
      a => a + 100)`, function () {
    expect(
      go(
        0,
        a => a + 1,
        a => a + 10,
        a => a + 100)).to.eql(111)
  });

  it(`
    go(
      0,
      a => { throw { hi: 'ho' } },
      a => a + 10,
      a => a + 100)`, function () {
    try {
      go(
        0,
        a => { throw { hi: 'ho' } },
        a => a + 10,
        a => a + 100)
    } catch (a) {
      expect(a).to.eql({ hi: 'ho' })
    }
  });

  it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => a + 10,
      a => a + 100)`, async function () {
      expect(
        await go(
          0,
          a => Promise.resolve(a + 1),
          a => a + 10,
          a => a + 100)).to.eql(111)
  });

  it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => Promise.reject({ hi: 'ho' }),
      a => a + 100)`, async function () {
      try {
        await go(
          0,
          a => Promise.resolve(a + 1),
          a => Promise.reject({ hi: 'ho' }),
          a => a + 100)
      } catch (a) {
        expect(a).to.eql({ hi: 'ho' })
      }
  });

  it(`
    go(
      0,
      a => Promise.resolve(a + 1),
      a => { throw { hi: 'ho' } },
      a => a + 100)`, async function () {
      try {
        await go(
          0,
          a => Promise.resolve(a + 1),
          a => { throw { hi: 'ho' } },
          a => a + 100)
      } catch (a) {
        expect(a).to.eql({ hi: 'ho' })
      }
  });
});