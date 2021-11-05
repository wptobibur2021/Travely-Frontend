import RouteNav from "./Router/RouteNav";
import AuthContext from "./Context/AuthContext";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
      <AuthContext>
          <ToastContainer />
        <RouteNav></RouteNav>
      </AuthContext>
  );
}
export default App;
