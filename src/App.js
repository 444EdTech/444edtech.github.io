import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './NavbarComponent';
import LandingPage from './LandingPage';
import Footer from './Footer';
import CareerAwarenessProgram from './CareerAwarenessProgram';
import PersonalizedCareerWorkshops from './PersonalizedCareerWorkshops';
import DataScienceCoursePage from './DataScienceCoursePage';
import DSACoursePage from './DSACoursePage';
import FullStackProgramPage from './FullStackProgramPage';
import ITIndustryCoursePage from './ITIndustryCoursePage';
import RegistrationPage from './RegistrationPage';
import ConnectionRequest from './ConnectionRequest';
import AwarenessPrograms from './AwarenessPrograms';
import Founders from './Founders';
import ContactUs from './ContactUs';
import SendRequest from './SendRequest';
import Connect from './Connect';
import ChatGPT from './ChatGPT';
import ChatWidget from './ChatWidget';

function App() {
  return (

    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/ChatGPT" element={<ChatGPT />} />

          <Route path="/ChatWidget" element={<ChatWidget />} /> */}

          <Route path="/Connect" element={<Connect />} />

          <Route path="/AwarenessPrograms" element={<AwarenessPrograms />} />

          <Route path="/Founders" element={<Founders />} />

          <Route path="/ContactUs" element={<ContactUs />} />


          <Route path="/Connection-request" element={<ConnectionRequest />} />

          <Route path="/SendRequest" element={<SendRequest />} />

        </Routes>
        
        <Routes>
          
          <Route path="/CareerAwarenessProgram" element={<CareerAwarenessProgram />} />
          <Route path="/ITIndustryCoursePage" element={<ITIndustryCoursePage />} />
          <Route path="/PersonalizedCareerWorkshops" element={<PersonalizedCareerWorkshops />} /> 
          <Route path="/PersonalizedCareerWorkshops/DataScienceCoursePage" element={<DataScienceCoursePage />} /> 
          <Route path="/PersonalizedCareerWorkshops/FullStackCoursePage" element={<FullStackProgramPage />} />  
          <Route path="/PersonalizedCareerWorkshops/DSACoursePage" element={<DSACoursePage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>
        
        {/* <ChatWidget /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;