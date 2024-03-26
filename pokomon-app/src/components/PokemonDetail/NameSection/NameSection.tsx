const NameSection = ({ id, korName }: { id: string; korName: string }) => {
  return (
    <>
      <div className="text-xl text-slate-500 mt-10">No.{String(id).padStart(4, '0')}</div>
      <h1 className="text-4xl font-bold ">{korName}</h1>
    </>
  )
}

export default NameSection
