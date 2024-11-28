import { createSignal, type Component } from "solid-js"

interface Props {
  initValue : number;
}

export const Counter: Component<Props> = (props) => {

  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {counter()}</h3>

      <button onClick={() => setCounter(prev => ++prev)} class="rounded-md bg-blue-500 px-4 py-2 mr-2">+1</button>
      <button onClick={() => setCounter(prev => --prev)} class="rounded-md bg-red-500 px-4 py-2">-1</button>
    </>
  )
}