import './App.css'
import Header from './components/Header'
import TitlePage from "./components/TitlePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

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
