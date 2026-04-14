import Navbar from "../../components/shared/Navbar/Navbar.jsx"

function Mainlayout({Children}) {
  return (
    <>
        <Navbar />
        {Children}
    </>
  )
}

export default Mainlayout