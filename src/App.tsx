import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { AppliedWork, ApprovalWork, HomePage, LoginPage, SignupPage, UserWorkProfile } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          // element={user ? <Navigate to="/profile" /> : <h1>Login</h1>}
          element={<HomePage/>}
        />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserWorkProfile />} />
        <Route path="/applied" element={<AppliedWork />} />
        <Route path="/approval" element={<ApprovalWork />} />
      </Routes>
      <ToastContainer />
    </div>

  )
}

export default App
