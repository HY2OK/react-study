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
        className={`absolute top-[-370px] w-[500px] h-[500px] rounded-[80%] bg-${types}  z-0`}
      />
      <div className="absolute top-3 right-4 w-14 bg-white rounded-md text-center text-slate-700">
        {pokemonId}
      </div>
      <div className="w-[80%] h-[70%] mt-8 z-10 flex justify-center items-center">
        <img src={imgUrl} alt={pokemonName} className="h-full" />
      </div>
    </>
  )
}

export default ImageSection