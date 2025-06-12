"use client"
import { useState } from "react";
import SymptomesTable from "./prediction-page/symptomeTable";

export default function Prediction() {
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState(null)
    const sendPrediction = () => {
        alert({
            Age: age,
            Sex: sex,
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
                    <select className="border-2 rounded-lg p-2">
                        <option value={0} disabled selected>Selectionner votre sexe</option>
                        <option value={1}>Femme</option>
                        <option value={2}>Homme</option>
                    </select>
                    </div>

                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <label>Pregnency:</label>
                    <select className="border-2 rounded-lg p-2">
                        <option value={0} disabled selected>Selectionner votre choix</option>
                        <option value={1}>Oui</option>
                        <option value={2}>Non</option>
                    </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch justify-between w-full">
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>Type du Patient:</label>
                        <select className="border-2 rounded-lg p-2">
                            <option value={0} disabled selected>Selectionner votre choix</option>
                            <option value={1}>Ambulatorie (soins à domicile)</option>
                            <option value={2}>Hospitalisé</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>médicale unit:</label>
                        <select className="border-2 rounded-lg p-2">
                            <option value={0} disabled selected>Selectionner votre choix</option>
                            <option value={1}>Ambulatorie (soins à domicile)</option>
                            <option value={2}>Hospitalisé</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/3">
                        <label>Confirmation des cas:</label>
                        <select className="border-2 rounded-lg p-2">
                            <option value={0} disabled selected>Selectionner votre choix</option>
                            <option value={1}>Ambulatorie (soins à domicile)</option>
                            <option value={2}>Hospitalisé</option>
                        </select>
                    </div>
                </div>
            </div>

            {/*Symptômes et Conditions Médicales*/}
            <SymptomesTable/>
            <button onClick={sendPrediction} className="bg-[#003049] w-28 text-white p-1 rounded-xl ml-auto font-bold cursor-pointer">Predict</button>
        </div>
    )
}