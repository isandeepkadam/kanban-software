import { Button , Box} from "@mui/material"
// import { ReactElement , useState} from "react"
import { useSelector, useDispatch  } from "react-redux"
import { add, sub} from "../store/features/counterSlice"

const Home = () => {

  const counter = useSelector((state) => state.counter.counter) 

  const dispatch = useDispatch()

  return (
    <div className="counter">
      <Box component="span" sx={{ p: 4, border: '1px dashed grey' }}>
        <h1>{counter}</h1>
      </Box>
      <div>
        <Button variant="outlined" onClick={() => dispatch(add())}>Add</Button>
        <Button variant="outlined" onClick={() => dispatch(sub())}>sub</Button>
      </div>
    </div>
  )
}

export default Home
