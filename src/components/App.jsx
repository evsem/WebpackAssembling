import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCount } from "../reducers/reducer"
import styles from "./styles.module.scss"

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.mainReducer.count)

  function onCountClick() {
    dispatch(setCount(5))
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{count}</h2>
      <div className={styles.button__box}>
        <button onClick={() => onCountClick()}>COUNT</button>
      </div>
    </div>
  )
}

export default App
