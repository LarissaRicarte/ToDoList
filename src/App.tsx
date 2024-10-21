
import { CSSProperties } from 'react'
import './App.css'

const styles : { [key: string] : CSSProperties} = {
  article: {
    backgroundColor: "#333",
    margin: 5,
    width: '13em',
    maxWidth: "20em",
    padding: 4,
    borderRadius: 5
  },

  div: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    display: 'flex',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column'
  }
}

interface TarefaProps {
  titulo: string
}

const Tarefa = ({ titulo }: TarefaProps) => {
  return <article style={styles.article}> <input type="checkbox" /> <span>{titulo}</span></article>
}

const ToDoList = () => {
  return <div style={styles.div}>
    <header>
      <h2>Tarefas</h2>
    </header>
    <div>
      <Tarefa titulo="Academia" />
      <Tarefa titulo="Estágio" />
      <Tarefa titulo="Compras" />
      <Tarefa titulo="Estudos" />
      <Tarefa titulo="Aula Faculdade" />
    </div>
  </div>
}

function App() {


  return (
    <div id='App'>
      <ToDoList />
    </div>
  )
}

export default App
