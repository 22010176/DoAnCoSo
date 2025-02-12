import { useDispatch, useSelector } from "react-redux";

import { getCounter } from "../../redux/selectors";
import counter from "./counterReducer";
import { Button } from "antd";

function Counter() {
  const count = useSelector(getCounter)
  const dispatch = useDispatch()

  return <>
    <h1 className="text-black">Counter</h1>
    <Button onClick={function (e) {
      dispatch(counter.actions.increment(Math.random()))
    }}>Tang</Button>

    <p>{count.value + ''}</p>

    <Button onClick={function (e) {
      dispatch(counter.actions.decrement(Math.random()))
    }}>Giam</Button>
  </>
}

export default Counter;