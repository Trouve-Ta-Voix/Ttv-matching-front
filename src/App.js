import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./services/context/user"

// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import "dayjs/locale/fr"

import Login from "./presentation/pages/Login"
import SignUp from "./presentation/pages/SignUp"
import SignUpTeacher from "./presentation/pages/SignUpTeacher"
import SignUpTrainer from "./presentation/pages/SignUpTrainer"
import Profile from "./presentation/pages/Profile"
import NotFound from "./presentation/pages/NotFound"

import AdminEvent from "./presentation/pages/AdminEvent"
import AdminProfile from "./presentation/pages/AdminProfile"
import AdminValidationAccounts from "./presentation/pages/AdminValidationAccounts"
import AdminMatchTrainerPick from "./presentation/pages/AdminMatchTrainerPick"

import TeacherClasses from "./presentation/pages/TeacherClasses"
import TeacherProfile from "./presentation/pages/TeacherProfile"
import TeacherSchool from "./presentation/pages/TeacherSchool"
import TeacherClassSummary from "./presentation/pages/TeacherClassSummary"

import TrainerAdresses from "./presentation/pages/TrainerAdresses"
import TrainerAdressesUpdate from "./presentation/pages/TrainerAdressesUpdate"
import TrainerProfile from "./presentation/pages/TrainerProfile"
import TrainerScheduleSummary from "./presentation/pages/TrainerScheduleSummary"

import "./shared/reset.css"

const App = () => {
    return (
        <UserContextProvider>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr"> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signup/teacher" element={<SignUpTeacher />} />
                    <Route path="/signup/trainer" element={<SignUpTrainer />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/admin/events" element={<AdminEvent />} />
                    <Route path="/admin/profile" element={<AdminProfile />} />
                    <Route
                        path="/admin/validation/accounts"
                        element={<AdminValidationAccounts />}
                    />
                    <Route
                        path="/admin/events/matching/:availabilityId"
                        element={<AdminMatchTrainerPick />}
                    />
                    <Route
                        path="/teacher/classes"
                        element={<TeacherClasses />}
                    />
                    <Route
                        path="/teacher/profile"
                        element={<TeacherProfile />}
                    />
                    <Route path="/teacher/school" element={<TeacherSchool />} />
                    <Route
                        path="/teacher/classes/:classId"
                        element={<TeacherClassSummary />}
                    />
                    <Route
                        path="/trainer/adresses"
                        element={<TrainerAdresses />}
                    />
                    <Route
                        path="/trainer/adresses/:id"
                        element={<TrainerAdressesUpdate />}
                    />
                    <Route
                        path="/trainer/profile"
                        element={<TrainerProfile />}
                    />
                    <Route
                        path="/trainer/schedule/summary"
                        element={<TrainerScheduleSummary />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            {/* </LocalizationProvider> */}
        </UserContextProvider>
    )
}

export default App
