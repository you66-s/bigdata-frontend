import Prediction from "@/Components/prediction";

export default function Home() {
  return (
    <div className="w-full overflow-y-auto" >
      <div className="prediction-section p-2">
        <Prediction/>
      </div> 
    </div>
  );
}
