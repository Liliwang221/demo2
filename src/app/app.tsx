import React from 'react';
import "../app.css"

// 引入路由
import Route from '../router/RouterView'
import routes from '../router/routerConfig'


const App: React.FC = () => {
  return (
    <div className="App-wrap">
       <Route routes={routes} ></Route>
    </div>
  );
}

export default App;
