import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="h-[100px] flex justify-between items-center px-10">
        <Link to="/" className="text-3xl font-bold cursor-pointer">
          ZZap.log
        </Link>
        <Link
          to="/post"
          className="border border-black p-2 rounded-lg hover:text-white hover:bg-slate-500 hover:border-none"
        >
          글 작성하기
        </Link>
      </nav>
      <div className="min-h-[calc(100vh-100px)] bg-slate-100">
        <Outlet />
      </div>
    </>
  )
}

export default Navbar
