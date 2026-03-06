import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onbording";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding" element={
                <ProtectedRoute>
                    <Onboarding />
                </ProtectedRoute>
            } />
        </Routes>
    );
};


export default App;
