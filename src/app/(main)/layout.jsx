import Footer from "../../components/shared/Footer/Footer.jsx"
import Navbar from "../../components/shared/Navbar/Navbar.jsx"

function Mainlayout({children}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default Mainlayout