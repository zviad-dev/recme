import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Questionary from './pages/Questionary';
import Recommendation from './pages/Recommendation';
import { Theme } from './Theme';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Encode Sana Expanded',sans-serif;
    }
`;

function App() {
    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <Global />
                <Routes>
                    <Route path="/" element={<Landing />} exact />
                    <Route path="/signin" element={<Signin />} exact />
                    <Route path="/home" element={<Home />} exact />
                    <Route
                        path="/questionary"
                        element={<Questionary />}
                        exact
                    />
                    <Route
                        path="/recommendation"
                        element={<Recommendation />}
                        exact
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
