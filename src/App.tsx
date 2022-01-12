import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./presentation/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
