
import './App.css'

function App() {
const clickHandleParam = (num)=> {
  alert(num*5)
}

  const clickHandleOne = () =>{
    alert("clicked one")
  }
  return (
    <>
     <h1>React Core concept part 02</h1>

     <button onClick={clickHandleOne}>click one</button>
     <button onClick={()=> {alert('clicked two')}}>click two</button>
     <button onClick={() => clickHandleParam(10)}>click three</button>
    </>
  )
}

export default App
