import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Faq from './components/pages/Faq';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Router>

        {/* Header */}
        <Header />

        {/* Website body */}
        <Switch>
            <Route path="/works/cupy/" exact>
                <Home />
            </Route>
            <Route path="/works/cupy/about">
                <About />
            </Route>
            <Route path="/works/cupy/faq">
                <Faq />
            </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}