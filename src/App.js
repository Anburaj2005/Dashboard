
import './App.css';
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/Pagecontent";
import RightMenu from './Components/SideMenu/RightMenu';

function App() {
  return (
    <div className="App">
      <AppHeader />
   
      <div className='SideMenuAndSideMenu App-1'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        {/* <SideMenu></SideMenu> */}
        <RightMenu></RightMenu>

        </div>
      
      <AppFooter />
    </div>
  );
}

export default App;
