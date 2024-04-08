import FamiliarCard from "../components/familiarCard"
import { familiar } from "../constants"
const TCard = () => {
  return (
    <>
    <div className="h-screen">
    <h1 className="text-5xl font-bold p-10 ml-5">Does this sound familiar...</h1>
    <section className="max-container mt-8 flex justify-center flex-wrap gap-9 ">
    {familiar.map((familiar)=>(  
        <FamiliarCard key={familiar.label}
        {...familiar} />
      ))}
    </section>
    </div>
    </>
  )
}

export default TCard