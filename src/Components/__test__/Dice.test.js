import generateDiceNumber from '../../util/DiceNumber';

it('validates the dice number', () => {
  const value = generateDiceNumber();
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThan(7);
});
