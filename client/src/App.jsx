import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onbording";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/Settings/MyProfile";
import MyAccount from "./pages/Settings/MyAccount";
import JobPreferences from "./pages/Settings/JobPreferences";
import CourseSuggestions from "./pages/Careers/CourseSuggestions";
import Roadmaps from "./pages/Careers/Roadmaps";
import ATSScanner from "./pages/ResumeAI/ATSScanner";
import ResumeBuilder from "./pages/ResumeAI/ResumeBuilder";
import AcceptedJobs from "./pages/Careers/AcceptedJobs";
import RejectedJobs from "./pages/Careers/RejectedJobs";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding" element={
                <ProtectedRoute>
                    <Onboarding />
                </ProtectedRoute>
            } />

            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />

            </Route>
            <Route path="my-profile" element={
                <ProtectedRoute>
                    <MyProfile />
                </ProtectedRoute>
            } />

            <Route path="my-account" element={
                <ProtectedRoute>
                    <MyAccount />
                </ProtectedRoute>
            } />

            <Route path="job-preferences" element={
                <ProtectedRoute>
                    <JobPreferences />
                </ProtectedRoute>
            } />

            <Route path="roadmaps" element={
                <ProtectedRoute>
                    <Roadmaps />
                </ProtectedRoute>
            } />
            <Route path="course-suggestions" element={
                <ProtectedRoute>
                    <CourseSuggestions />
                </ProtectedRoute>
            } />
            <Route path="roadmaps" element={
                <ProtectedRoute>
                    <Roadmaps />
                </ProtectedRoute>
            } />
            <Route path="ats-scanner" element={
                <ProtectedRoute>
                    <ATSScanner />
                </ProtectedRoute>
            } />

            <Route path="accepted-jobs" element={
                <ProtectedRoute>
                    <AcceptedJobs />
                </ProtectedRoute>
            } />
            <Route path="rejected-jobs" element={
                <ProtectedRoute>
                    <RejectedJobs />
                </ProtectedRoute>
            } />

            <Route path="resume-builder" element={
                <ProtectedRoute>
                    <ResumeBuilder />
                </ProtectedRoute>
            } />

        </Routes>
    );
};


export default App;
