import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import {
  Landing,
  Software_Development,
  Automation_Ai,
  ItSolution,
  WebSolution,
  MembershipManagement,
  Conference_Management,
  Education_Management,
  Election_Management,
  Demo,
  ContactUs,
  Career,
  Team,
  AboutUs,
  ApplyPage
} from "./pages"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Landing />} />
          <Route path='/services'>
            <Route path='software_development' element={<Software_Development />} />
            <Route path='web_solution' element={<WebSolution />} />
            <Route path='it_solution' element={<ItSolution />} />
            <Route path='automation_ai' element={<Automation_Ai />} />
          </Route>
          <Route path='/product'>
            <Route path='membership_management' element={<MembershipManagement />} />
            <Route path='election_management' element={<Election_Management />} />
            <Route path='education_management' element={<Education_Management />} />
            <Route path='conference_management' element={<Conference_Management />} />
          </Route>
          <Route path='/demo' element={<Demo />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/team' element={<Team />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/career/:jobId' element={<ApplyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
