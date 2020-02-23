'use strict';
const eeneyMeeneyMineyMoe = require('./eeney-meeney-miney-moe.js');

describe('eeneyMeeneyMineyMoe function', () => {
  it('can return null for an empty array', () => {
    expect(eeneyMeeneyMineyMoe(null, 5)).toBe(null);
    expect(eeneyMeeneyMineyMoe([], 7)).toBe(null);
  });

  it('can return the value for an array with 1 element', () => {
    expect(eeneyMeeneyMineyMoe(['Z'], 4)).toBe('Z');
    expect(eeneyMeeneyMineyMoe(['Y'], 1)).toBe('Y');
  });

  it('can return the right value from a populated array', () => {
    expect(eeneyMeeneyMineyMoe(['A', 'B', 'C', 'D', 'E'], 3)).toBe('D');
    expect(eeneyMeeneyMineyMoe(['A', 'B'], 3)).toBe('B');
    expect(eeneyMeeneyMineyMoe(['A', 'B'], 4)).toBe('A');
  });

  it('can throw error if k is less than 1', () => {
    expect(() => eeneyMeeneyMineyMoe(['A', 'B', 'C'], 0)).toThrowError('Error: k must be 1 or greater');
    expect(() => eeneyMeeneyMineyMoe(['B', 'C'], -2)).toThrowError('Error: k must be 1 or greater');
  });
});