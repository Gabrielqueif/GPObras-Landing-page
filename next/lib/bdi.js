// Fórmula do TCU (Acórdão 2.622/2013). Entradas em %, saída em %.
export function calcBdi({ ac, sg, r, df, l, i }) {
  return (((1 + (ac + sg + r) / 100) * (1 + df / 100) * (1 + l / 100)) / (1 - i / 100) - 1) * 100;
}
