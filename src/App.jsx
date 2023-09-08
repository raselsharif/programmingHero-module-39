
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
function App() {
  const clickHandleParam = (num) => {
    alert(num * 5)
  }

  const clickHandleOne = () => {
    alert("clicked one")
  }
  return (
    <>
      <h1>React Core concept part 02</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={clickHandleOne}>click one</button>
      <button onClick={() => { alert('clicked two') }}>click two</button>
      <button onClick={() => clickHandleParam(10)}>click three</button>
    </>
  )
}

export default App
