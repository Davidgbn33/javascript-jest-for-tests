import { multiplies, sum, subtracts, substring, reverse, capitalyse, pair, kelvinToCelsius } from './ex0';

describe('mes tests', () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test('subscribe 4 - 3 equal 1', () => {
    expect(subtracts(4, 3)).toBe(1);
  });

  test('adds 2 * 2 to equal 4', () => {
    expect(multiplies(2, 2)).toEqual(4);
  });

  test('checks if a string contains a specific substring', () => {
    expect(substring("manger un phoque", "phoque")).toBe(true)
  });

  test('reverse string', () => {
    expect(reverse("phoque")).toBe("euqohp")
  });

  test('capitalyse', () => {
    expect(capitalyse("phoque")).toBe("Phoque")
  });

  test('pair', () => {
    expect(pair(10)).toBe(true)
  });

  test('kelvin to celsius', () => {
    expect(kelvinToCelsius(212)).toBe(100)
  });

});
