import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <AppLayout />
    // <ThemeProvider theme={theme}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route element={AppLayout}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
