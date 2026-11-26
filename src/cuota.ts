export function calcularCuota(monto: number, tea: number, meses: number): number {
  if (!(monto > 0)) throw new Error('Monto inválido');
  if (!(tea >= 0)) throw new Error('Tasa inválida');
  if (!Number.isInteger(meses) || meses < 1) throw new Error('Plazo inválido');

  const i = Math.pow(1 + tea / 100, 1 / 12) - 1;
  const cuota = tea === 0 ? monto / meses : (monto * i) / (1 - Math.pow(1 + i, -meses));

  return Math.round(cuota * 100) / 100;
}
