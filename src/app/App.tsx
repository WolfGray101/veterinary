/* eslint-disable react/jsx-wrap-multilines */
import { Route, Routes } from 'react-router-dom';
import Landing from '../view/Landing';

function App(): JSX.Element {
  return (
    <div className="layout">
      <div>Header</div>
      <div className="layout_page">
        {/* <Landing /> */}
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<div>SignUp Page</div>} />
            <Route path="/sign-in" element={<div>SignIn Page</div>} />
            <Route path="/admin" element={<div>Admin Page</div>} />
            <Route path="/client" element={<div>Client Page</div>} />
            <Route path="/manager" element={<div>Manager Page</div>} />
            <Route path="/doctor" element={<div>Doctor Page</div>} />
            <Route path="/forum" element={<div>Forum Page</div>} />
            <Route path="/petFindPage" element={<div>PetFind Page</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
