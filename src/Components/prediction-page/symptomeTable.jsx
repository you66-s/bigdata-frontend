'use client'
import { use, useState } from "react"

export default function SymptomesTable() {
    const [diabeteValue, setDiabeteValue] = useState(97)
    const [hypertensionValue, setHypertensionValue] = useState(97)
    const [Asthme, setAsthmeValue] = useState(97)
    const [Immunosuppression, setImmunosuppressionValue] = useState(97)
    const [RenaleChronique, setRenaleChroniqueValue] = useState(97)
    const [Obesite, setObesiteValue] = useState(97)
    const [Cardiovasculaires, setCardiovasculairesValue] = useState(97)
    const [Pneumonie, setPneumonieValue] = useState(97)
    const [COPD, setCOPDValue] = useState(97)
    const [Fumeur, setFumeurValue] = useState(97)
    const [Intube, setIntubeValue] = useState(97)
    return(
        <div className="flex flex-col gap-6">
        <h1 className="font-light text-2xl">Symptômes et Conditions Médicales</h1>
      
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-[11px] sm:text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3">
                  CONDITION ET SYMPTÖMES
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-center">
                  TRUE
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-center">
                  FALSE
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Diabète", state: diabeteValue, setter: setDiabeteValue },
                { name: "Hypertension", state: hypertensionValue, setter: setHypertensionValue },
                { name: "Asthme", state: Asthme, setter: setAsthmeValue },
                { name: "Immunosuppression", state: Immunosuppression, setter: setImmunosuppressionValue },
                { name: "Maladie rénale chronique", state: RenaleChronique, setter: setRenaleChroniqueValue },
                { name: "Obésité", state: Obesite, setter: setObesiteValue },
                { name: "Problèmes cardiovasculaires", state: Cardiovasculaires, setter: setCardiovasculairesValue },
                { name: "Pneumonie", state: Pneumonie, setter: setPneumonieValue },
                { name: "Maladie pulmonaire chronique (COPD)", state: COPD, setter: setCOPDValue },
                { name: "Fumeur", state: Fumeur, setter: setFumeurValue },
                { name: "Intubé", state: Intube, setter: setIntubeValue },
              ].map(({ name, state, setter }) => (
                <tr key={name} className="bg-white border-b border-gray-200">
                  <th scope="row" className="px-4 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {name}
                  </th>
                  <td className="px-4 sm:px-6 py-4 text-center">
                    <input
                      type="radio"
                      name={name}
                      value={1}
                      checked={state === 1}
                      onChange={(e) => setter(Number(e.target.value))}
                    />
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-center">
                    <input
                      type="radio"
                      name={name}
                      value={2}
                      checked={state === 2}
                      onChange={(e) => setter(Number(e.target.value))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    )
}