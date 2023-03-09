import './App.css'
import Header from './components/Header'
import TitlePage from "./pages/TitlePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <TitlePage></TitlePage>
            <AboutPage></AboutPage>
            <ProjectsPage></ProjectsPage>
            <ContactPage></ContactPage>
        </div>
    )
}

export default App
