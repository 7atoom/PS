function divide(dividend: number, divisor: number): number {
  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  const isPos = dividend >= 0 === divisor >= 0;

  let quotient = 0;
  for (let i = 31; i >= 0; i--) {
    quotient <<= 1;
    if (absDividend >>> i >= absDivisor) {
      absDividend -= absDivisor << i;
      quotient += 1;
    }
  }
  if (quotient < 0) {
    return isPos ? 2 ** 31 - 1 : -(2 ** 31);
  }
  return isPos ? quotient : -quotient;
}