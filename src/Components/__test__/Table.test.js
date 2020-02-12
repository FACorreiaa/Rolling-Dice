import * as Personal from '../../util/constants';

//tests are very simple and basic because i got out of time
//can prove myself with jest and enzyme on another time, im sorry
it('validates the card data', () => {
  expect(typeof Personal.contact).toBe('string');
  expect(typeof Personal.email).toBe('string');
  expect(typeof Personal.github).toBe('string');
  expect(typeof Personal.name).toBe('string');
  expect(typeof Personal.portfolio).toBe('string');
  expect(typeof Personal.title).toBe('string');
  expect(typeof Personal.linkedin).toBe('string');
});
