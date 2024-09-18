import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work1 from "./pages/Works/components/Work1/index.jsx";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Works/DrayEasy" element={<Work1 />}></Route>
            </Routes>
        </>
    )

};

export default App;