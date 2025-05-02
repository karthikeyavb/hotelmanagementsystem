import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage';
import UserDashboard from './pages/UserDashboard';
import RoomsPage from './pages/RoomsPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';
import HistoryPage from './pages/HistoryPage';
import MedicalPage from './pages/MedicalPage';
import ElderlyRoomsPage from './pages/ElderlyRoomsPage';
import './App.css'
import styled from 'styled-components'

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar>
          <NavbarLogo>Luxury Hotel</NavbarLogo>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth">Login/Register</NavLink>
          </NavLinks>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/elderly-rooms" element={<ElderlyRoomsPage />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e8a87c;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e8a87c;
  }
`;

export default App
