
const familiarCard = ({imgURL, label, subtext ,bg}) => {
  return (
    <div className="flex-1 w-full  rounded-[20px] shadow-3xl px-10 py-6 bg-blue-100"  >
      <div className="w-11 h-11 justify-center flex items-center rounded-full ">
        <img src={imgURL} alt={label}
        width={230}
        height={200} />
      </div>
      <h3 className="mt-5 text-3xl leading-tight font-bold">{label}</h3>
      <p className="mt-2 text-lg leading-tight text-slate-500">{subtext}</p>
    </div>
  )
}

export default familiarCard