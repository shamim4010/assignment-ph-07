import Footer from "../../components/shared/Footer/Footer.jsx"
import Navbar from "../../components/shared/Navbar/Navbar.jsx"

function Mainlayout({Children}) {
  return (
    <>
        <Navbar />
        {Children}
        <Footer />
    </>
  )
}

export default Mainlayout