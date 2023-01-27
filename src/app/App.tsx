import { Route, Routes } from 'react-router-dom';
import Landing from '../view/Landing';
import Header from '../widgets/HeaderWidget';
import {
  AdminPage,
  ClientPage,
  DoctorPage,
  ForumPage,
  ManagerPage,
  PetFindPage,
  SignInPage,
  SignUpPage,
} from '../views';
import Footer from '../widgets/FooterWidget';

function App(): JSX.Element {
  return (
    <div className="layout">
      <Header />
      <div className="layout_page">
        <main>
          <Routes>

            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/petFindPage" element={<PetFindPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
