import './App.css'
import Home from './components/Home/Home'

function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  const printDish = dishes.map((dish) => <Home dish={dish}/>)
  
  return (
    <div>
        {printDish}
    </div>
  )
}

export default App
