import { Route, Routes } from 'react-router-dom';
import Landing from '../features/landing/Landing';
import Header from '../widgets/HeaderWidget';
import Footer from '../widgets/FooterWidget';

import {
  AdminPage,
  ClientPage,
  DoctorPage,
  ForumPage,
  ManagerPage,
  PetFindPage,
  SignInPage,
  SignUpPage,
} from '../view';

import {
  AdminHomePage,
  AdminCommentsPage,
  AdminDoctorsPage,
  AdminNotificationsPage,
  AdminPrivacyPage,
  AdminSettingPage,
  AdminSupportPage,
  AdminTopicPage,
  AdminUsersPage,
} from '../view/Admin/AdminPage/pages';

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
            <Route path="/admin" element={<AdminPage />}>
              <Route path="home" element={<AdminHomePage />} />
              <Route path="doctors" element={<AdminDoctorsPage />} />
              <Route path="notification" element={<AdminNotificationsPage />} />
              <Route path="users" element={<AdminUsersPage />} />
              <Route path="topic" element={<AdminTopicPage />} />
              <Route path="comments" element={<AdminCommentsPage />} />
              <Route path="setting" element={<AdminSettingPage />} />
              <Route path="support" element={<AdminSupportPage />} />
              <Route path="privacy" element={<AdminPrivacyPage />} />
            </Route>
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
