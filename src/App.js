import MainLayout from "./components/MainLayout";
import Router from "./router";

const App = () => {
  return (
    <>
      <MainLayout>
        <Router />
      </MainLayout>
    </>
  );
};

export default App;

// npm error code EINVALIDPACKAGENAME
// npm error Invalid package name "react- " of package "react- @^18.3.1": name cannot contain leading or trailing spaces; name can only contain URL-friendly characters.
// npm error A complete log of this run can be found in: C:\Users\msi2021\AppData\Local\npm-cache\_logs\2024-10-24T15_42_27_408Z-debug-0.log
