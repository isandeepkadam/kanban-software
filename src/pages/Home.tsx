import { Button , Box} from "@mui/material"
import { ReactElement , useState} from "react"
const Home = (): ReactElement => {
  
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(count => count + 1)
  }

  const sub = () => {
    setCounter(count => count -1)
  }

  return (
    <div className="counter">
      <Box component="span" sx={{ p: 4, border: '1px dashed grey' }}>
        <h1>{counter}</h1>
      </Box>
      <div>
        <Button variant="outlined" onClick={add}>Add</Button>
        <Button variant="outlined" onClick={sub}>sub</Button>
      </div>
    </div>
  )
}

export default Home
