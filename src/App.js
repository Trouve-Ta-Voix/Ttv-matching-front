import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./presentation/pages/Login"
import SignUp from "./presentation/pages/SignUp"
import Profile from "./presentation/pages/Profile"
import NotFound from "./presentation/pages/NotFound"

import AdminEvent from "./presentation/pages/AdminEvent"
import AdminProfile from "./presentation/pages/AdminProfile"
import AdminValidationAccounts from "./presentation/pages/AdminValidationAccounts"

import TeacherClasses from "./presentation/pages/TeacherClasses"
import TeacherProfile from "./presentation/pages/TeacherProfile"

import TrainerAdresses from "./presentation/pages/TrainerAdresses"
import TrainerProfile from "./presentation/pages/TrainerProfile"
import TrainerScheduleSummary from "./presentation/pages/TrainerScheduleSummary"

import "./shared/reset.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin/events" element={<AdminEvent />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route
                    path="/admin/validation/accounts"
                    element={<AdminValidationAccounts />}
                />
                <Route path="/teacher/classes" element={<TeacherClasses />} />
                <Route path="/teacher/profile" element={<TeacherProfile />} />
                <Route path="/trainer/adresses" element={<TrainerAdresses />} />
                <Route path="/trainer/profile" element={<TrainerProfile />} />
                <Route
                    path="/trainer/schedule/summary"
                    element={<TrainerScheduleSummary />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
