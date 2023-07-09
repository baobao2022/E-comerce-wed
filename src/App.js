import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultComponent from "./components/defaulcomponent/DefaultComponent";
import routes from "./route";
import 'antd/dist/reset.css';
// import styled from 'styled-components';
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((routes) => {
            const Page = routes.page;
            const Layout = routes.isShowHeader ? DefaultComponent : Fragment;
            return (
              <>
                <Route
                  key={routes.path}
                  path={routes.path}
                  element={
                    <>
                    <Layout>
                    </Layout>
                      <Page/>
                    
                    
                    </>
                  }
                />
              </>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
