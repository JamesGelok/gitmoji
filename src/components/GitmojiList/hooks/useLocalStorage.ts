import React from 'react'

export default function useLocalStorage(key: string, defaultValue: string) {
  const [state, setState] = React.useState(defaultValue)

  React.useEffect(() => {
    try {
      const localValue = window.localStorage.getItem(key)

      if (localValue !== null) {
        setState(JSON.parse(localValue))
      }
    } catch (error) {
      console.error(`ERROR: Loading ${key} from localStorage – ${error}`)
    }
  }, [])
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state])

  return [state, setState]
}
