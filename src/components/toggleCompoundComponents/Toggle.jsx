import { ToggleContext } from 'components/toggleCompoundComponents/ToggleContext'
import PropTypes from 'prop-types'
import * as React from 'react'

function useEffectAfterMount(cb, dependencies = []) {
  const justMounted = React.useRef(true)
  React.useEffect(() => {
    if (!justMounted.current) {
      cb()
    }
    justMounted.current = false
  }, [cb, ...dependencies])
}

export function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = React.useCallback(() => {
    setOn((oldOn) => !oldOn)
  }, [])
  useEffectAfterMount(() => {
    props.onToggle?.(on)
  }, [on])
  const value = React.useMemo(() => ({ on, toggle }), [on, toggle])
  return (
    <div className="card">
      <ToggleContext.Provider value={value}>
        {props.children}
      </ToggleContext.Provider>
    </div>
  )
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  children: PropTypes.node,
}
