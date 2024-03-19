import { useState } from 'react'
import PhoneListHeader from '../../components/PhoneList/PhoneListHeader/PhoneListHeader'
import PhoneListView from '../../components/PhoneList/PhoneListView/PhoneListView'

import PhoneModal from '../../components/Modal/PhoneModal/PhoneModal'
import SearchModal from '../../components/Modal/SearchModal/SearchModal'

const PhoneListPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <div className="w-[360px] h-[740px] grid grid-rows-[1fr,9fr] bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
      <PhoneListHeader
        setAddModalOpen={setAddModalOpen}
        setSearchModalOpen={setSearchModalOpen}
      />

      <PhoneListView />

      {addModalOpen && <PhoneModal setModal={setAddModalOpen} phone={null} />}
      {searchModalOpen && <SearchModal setSearchModalOpen={setSearchModalOpen} />}
    </div>
  )
}

export default PhoneListPage
