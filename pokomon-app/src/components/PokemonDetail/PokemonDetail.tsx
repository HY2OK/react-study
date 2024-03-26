import React from 'react'
import { PokemonDetails } from '../../redux/services/pokemon'
import NameSection from './NameSection/NameSection'
import ProfileSection from './ProfileSection/ProfileSection'
import StatSection from './StatSection/StatSection'

interface Props {
  data: PokemonDetails
  korName: string
}

const PokemonDetail: React.FC<Props> = ({ data, korName }) => {
  return (
    <>
      <section className="w-[50%] h-full flex justify-center items-center relative">
        <img
          src={data.sprites.other['official-artwork'].front_default}
          alt={data.name}
          className="w-full"
        />
      </section>

      <section
        className="w-[50%] h-full rounded-r-2xl flex flex-col py-14 px-10"
        style={{ boxSizing: 'border-box' }}
      >
        <NameSection id={data.id} korName={korName} />

        <ProfileSection types={data.types} height={data.height} weight={data.weight} />

        <StatSection stats={data.stats} />
      </section>
    </>
  )
}

export default PokemonDetail
