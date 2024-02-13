import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import StudyForm from "./pages/studyform";
import Layout from "./pages/layout";
import DynamicForm from "./pages/dynamicform";
import AddState from "./pages/addstate";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route path="studyform" element={<StudyForm />} />
          <Route path="dynamicform" element={<DynamicForm />} />
          <Route path="addstate" element={<AddState />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
