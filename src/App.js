import React from 'react';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Tips from './Components/Tips';
import Limitations from './Components/Limitations';
import Store from './Store';
import { Provider } from 'react-redux';
import './styles.css'

function App() {
    return(
        <Provider store={Store}>
            <main>
                <Header/>
                <Introduction/>
                <Tips/>
                <Limitations/>
            </main>            
        </Provider>

    )
}

export default App;