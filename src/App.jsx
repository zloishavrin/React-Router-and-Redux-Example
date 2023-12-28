import { Header } from "./Header/Header"
import { Screen } from "./Screen/Screen"
import { Action } from "./Action/Action"
import styles from './App.module.css'
import './index.css'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path='/passport' element={<Screen title={'Паспорт'} />} />
        <Route path='/adress' element={<Screen title={'Адрес'} />} />
        <Route path='/bio' element={<Screen title={'Био'} />} />
      </Routes>
      
      <Action />
    </div>
  )

}

export default App
