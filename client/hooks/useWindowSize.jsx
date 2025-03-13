import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState()

  function onResize() {
    const width = this.window.innerWidth
    const height = this.window.innerHeight

    setSize({ width, height })
  }

  useEffect(function () {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

export default useWindowSize