interface Props {
  pokemonId: string
  pokemonName: string
  imgUrl: string
  types: string
}

const ImageSection: React.FC<Props> = ({ pokemonId, pokemonName, imgUrl, types }) => {
  return (
    <>
      <div
        className={`absolute top-[-60%] left-[10%] w-[120%] h-[120%] rounded-[80%] bg-${types} z-0 shadow-2xl`}
      />
      <div className="w-14 ml-auto bg-white rounded-md text-center text-slate-700 z-10">
        {pokemonId}
      </div>
      <div className="w-[80%] aspect-square z-10 flex justify-center items-center">
        <img src={imgUrl} alt={pokemonName} className="h-full" />
      </div>
    </>
  )
}

export default ImageSection
