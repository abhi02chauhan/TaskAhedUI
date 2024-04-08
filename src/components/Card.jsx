
const Card = ({heading,para}) => {
  return (
    <div className="flex-1 bg-white p-8 m-2 rounded-2xl max-w-96">
    <h3 className=" text-xl font-bold">{heading}</h3>
    <p className="mt-2 text-sm  text-slate-500">{para}</p>
  </div>
  )
}

export default Card