import './App.css'
import Blogs from './components/Blogs'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Form from './components/Form'

function App() {
   return (
      <div className="App">
         <Introduction />
         <Projects />
         <Blogs />
         <Form />
      </div>
   )
}

export default App
