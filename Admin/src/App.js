import { useState } from 'react';
import RoutePage from './components/routes/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './reset.css'; // anrd css 
import ToggleThemeButton from './components/pages/layout/ToggleThemeButton';
import { ConfigProvider } from 'antd';

const App = () => {

    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (

        <>
            {darkTheme ? <ConfigProvider
                theme={{
                    token: {
                        // Alias Token
                        colorBgContainer: 'lightGray',
                    },
                }}
            >
                <RoutePage />
                <ToastContainer />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </ConfigProvider> : <ConfigProvider

                theme={{
                    token: {
                        colorBgContainer: 'white',
                    },
                }}
            >
                <RoutePage />
                <ToastContainer />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </ConfigProvider>}
        </>

    );
}

export default App;
