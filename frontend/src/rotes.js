import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "../src/pages/homepage"

function Routees(){
    return <Router>
    <Routes>
       
        <Route exact path="/" element={<Homepage />} />
      
    </Routes>
</Router>
}

export default Routees;