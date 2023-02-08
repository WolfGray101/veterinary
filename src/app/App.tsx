import { Route, Routes } from 'react-router-dom';
import Landing from 'features/landing/Landing';
import Header from 'widgets/HeaderWidget';
import Footer from 'widgets/FooterWidget';
import { Role } from 'types/AuthDTO/AuthDTO';
import {
  AdminPage,
  ClientPage,
  DoctorPage,
  ForumPage,
  ManagerPage,
  PetFindPage,
  SignInPage,
  SignUpPage,
  PrivateRoute,
} from 'view';
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
} from 'view/Admin/AdminPage/pages';

import cl from './App.module.scss';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className={cl.layout}>
        <div className={cl.layout_page}>
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute necessaryRole={Role.ADMIN}>
                    <AdminPage />
                  </PrivateRoute>
                }
              >
                <Route
                  path="home"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminHomePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="doctors"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminDoctorsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="notification"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminNotificationsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="users"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminUsersPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="topic"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminTopicPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="comments"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminCommentsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="setting"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminSettingPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="support"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminSupportPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="privacy"
                  element={
                    <PrivateRoute necessaryRole={Role.ADMIN}>
                      <AdminPrivacyPage />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                path="/client"
                element={
                  <PrivateRoute necessaryRole={Role.CLIENT}>
                    <ClientPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manager"
                element={
                  <PrivateRoute necessaryRole={Role.MANAGER}>
                    <ManagerPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/doctor"
                element={
                  <PrivateRoute necessaryRole={Role.DOCTOR}>
                    <DoctorPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/forum"
                element={
                  <PrivateRoute
                    necessaryRole={[
                      Role.ADMIN,
                      Role.CLIENT,
                      Role.DOCTOR,
                      Role.MANAGER,
                    ]}
                  >
                    <ForumPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/petFindPage"
                element={
                  <PrivateRoute necessaryRole={Role.CLIENT}>
                    <PetFindPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
