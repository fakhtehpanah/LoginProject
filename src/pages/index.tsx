import Login from "@/components/Login";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

  );
}
