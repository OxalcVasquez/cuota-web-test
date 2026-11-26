import { calcularCuota } from './cuota';

describe('calcularCuota', () => {
  test('E1: 10000, TEA 30, 12 meses → 957.86', () => {
    expect(calcularCuota(10000, 30, 12)).toBe(957.86);
  });

  test('E2: 5000, TEA 45, 6 meses → 927.42', () => {
    expect(calcularCuota(5000, 45, 6)).toBe(927.42);
  });

  test('E3: 3000, TEA 35, 24 meses → 168.34', () => {
    expect(calcularCuota(3000, 35, 24)).toBe(168.34);
  });

  test('E4: 10000, TEA 0, 12 meses → 833.33', () => {
    expect(calcularCuota(10000, 0, 12)).toBe(833.33);
  });

  test('E5: monto 0 → Monto inválido', () => {
    expect(() => calcularCuota(0, 30, 12)).toThrow('Monto inválido');
  });

  test('E6: TEA -5 → Tasa inválida', () => {
    expect(() => calcularCuota(10000, -5, 12)).toThrow('Tasa inválida');
  });

  test('E7: plazo 0 → Plazo inválido', () => {
    expect(() => calcularCuota(10000, 30, 0)).toThrow('Plazo inválido');
  });

  test('E8: plazo 6.5 → Plazo inválido', () => {
    expect(() => calcularCuota(10000, 30, 6.5)).toThrow('Plazo inválido');
  });
});
