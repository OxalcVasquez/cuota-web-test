import { useState } from 'react'
import { calcularCuota } from './cuota'

type Campo = 'monto' | 'tea' | 'meses'

const campos: { campo: Campo; etiqueta: string }[] = [
  { campo: 'monto', etiqueta: 'Monto (S/)' },
  { campo: 'tea', etiqueta: 'TEA (%)' },
  { campo: 'meses', etiqueta: 'Plazo (meses)' },
]

function App() {
  const [valores, setValores] = useState<Record<Campo, string>>({
    monto: '',
    tea: '',
    meses: '',
  })
  const [cuota, setCuota] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calcular = () => {
    try {
      setCuota(
        calcularCuota(
          Number(valores.monto),
          Number(valores.tea),
          Number(valores.meses),
        ),
      )
      setError(null)
    } catch (e) {
      setCuota(null)
      setError((e as Error).message)
    }
  }

  return (
    <main className="pantalla">
      <div className="contenido">
        <div>
          <h1 className="titulo">CuotaApp</h1>
          <p className="subtitulo">Método francés · TEA</p>
        </div>
        {campos.map(({ campo, etiqueta }) => (
          <label key={campo} className="campo">
            <span className="etiqueta">{etiqueta}</span>
            <input
              className="input"
              type="number"
              inputMode="decimal"
              placeholder="0"
              value={valores[campo]}
              onChange={e => setValores({ ...valores, [campo]: e.target.value })}
            />
          </label>
        ))}
        <button className="boton" onClick={calcular}>
          Calcular
        </button>
        {error !== null ? (
          <p className="error">{error}</p>
        ) : (
          cuota !== null && (
            <div className="tarjeta">
              <span className="etiqueta">Cuota mensual</span>
              <span className="monto">S/ {cuota.toFixed(2)}</span>
            </div>
          )
        )}
      </div>
    </main>
  )
}

export default App
