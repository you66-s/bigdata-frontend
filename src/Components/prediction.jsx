"use client"
import { useState } from "react";

export default function Prediction() {
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
    const [other, setOtherValue] = useState(97)
    const [age, setAge] = useState(97)
    const [sex, setSex] = useState(97)
    const [Pregnency, setPregnency] = useState(97)
    const [patientType, setPatientType] = useState(97)
    const [medicalUnit, setMedicalUnit] = useState(97)
    const [caseConfirmation, setCaseConfirmation] = useState(97)
    const sendPrediction = () => {
        console.log({
            Age: age,
            Sex: sex,
            Pregnency: Pregnency,
            Patient_Type: patientType,
            Medical_Unit: medicalUnit,
            Case_Confirmation: caseConfirmation,
            diabete: diabeteValue,
            hypertension: hypertensionValue,
            Asthme: Asthme,
            Immunosuppression: Immunosuppression,
            Renale_Chronique: RenaleChronique,
            Obesite: Obesite,
            Cardio_vasculaires: Cardiovasculaires,
            Pneumonie: Pneumonie,
            COPD: COPD,
            Fumeur: Fumeur,
            Intube: Intube,
            Other: other
        })
    }
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl">Prediction</h1>
            {/*Partie d'informations géneral*/}
            <div className="flex flex-col gap-6">
                <h1 className="font-light text-2xl">Information géneral</h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch justify-between w-full">
                    
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <label>Age:</label>
                    <input onChange={(e)=> setAge(e.target.value)} className="border-2 rounded-lg p-2" />
                    </div>

                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <label>Sex:</label>
                    <select value={sex} onChange={(e)=>setSex(e.target.value)} className="border-2 rounded-lg p-2">
                        <option value={97} disabled defaultValue>Selectionner votre sexe</option>
                        <option value={1}>Femme</option>
                        <option value={2}>Homme</option>
                    </select>
                    </div>

                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <label>Pregnency:</label>
                    <select value={Pregnency} onChange={(e)=>setPregnency(e.target.value)} className="border-2 rounded-lg p-2">
                        <option value={97} disabled defaultValue>Selectionner votre choix</option>
                        <option value={1}>Oui</option>
                        <option value={2}>Non</option>
                    </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch justify-between w-full">
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>Type du Patient:</label>
                        <select value={patientType} onChange={(e)=>setPatientType(e.target.value)} className="border-2 rounded-lg p-2">
                            <option value={97} disabled defaultValue>Selectionner votre choix</option>
                            <option value={1}>Ambulatorie (soins à domicile)</option>
                            <option value={2}>Hospitalisé</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>médicale unit:</label>
                        <select value={medicalUnit} onChange={(e)=>setMedicalUnit(e.target.value)} className="border-2 rounded-lg p-2">
                            <option value={97} disabled defaultValue>Selectionner votre choix</option>
                            <option value={1}>Hôpital Général</option>
                            <option value={2}>Hôpital Rural</option>
                            <option value={3}>Clinique de Santé Urbaine</option>
                            <option value={4}>Clinique de Spécialités</option>
                            <option value={5}>Centre de Santé </option>
                            <option value={6}>Hôpital Pédiatrique</option>
                            <option value={7}>Hôpital Gynéco-Obstétrique</option>
                            <option value={8}>Unité de Soins Intensifs</option>
                            <option value={9}>Unité d’Urgences Médicales</option>
                            <option value={10}>Hôpital Militaire</option>
                            <option value={11}>Hôpital Universitaire</option>
                            <option value={12}>Hôpital Privé</option>
                            <option value={13}>Autre établissement</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>Confirmation des cas:</label>
                        <select value={caseConfirmation} onChange={(e)=>setCaseConfirmation(e.target.value)} className="border-2 rounded-lg p-2">
                            <option value={97} disabled defaultValue>Selectionner votre choix</option>
                            <option value={1}>par test de laboratoire</option>
                            <option value={2}>par lien épidémiologique</option>
                            <option value={3}>par comité d'experts</option>
                            <option value={4}>soupçonné/suspect</option>
                            <option value={5}>non confirmé</option>
                            <option value={6}>négatif</option>
                            <option value={7}>Inconnu / Autre classification</option>
                        </select>
                    </div>
                </div>
            </div>

            {/*Symptômes et Conditions Médicales*/}
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
                        { name: "Other disease", state: other, setter: setOtherValue },
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
            <button onClick={sendPrediction} className="bg-[#003049] w-28 text-white p-1 rounded-xl ml-auto font-bold cursor-pointer">Predict</button>
        </div>
    )
}