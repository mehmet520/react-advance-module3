// Hook kullandığımız için şart değil; ama cross-cutting concern’ü HOC olarak da göstermek istersen:
// src/features/hoc-example-cross-cutting-concerns/hoc/withSubscription.js
import DataSource from 'features/data-source-structure/services/dataSource'
import * as React from 'react'

export default function withSubscription(WrappedComponent, selectData) {
  function WithSubscription(props) {
    const [data, setData] = React.useState(() => selectData(DataSource, props))

    React.useEffect(() => {
      const handleChange = () => setData(selectData(DataSource, props))
      const unsubscribe = DataSource.addChangeListener(handleChange)
      return () => {
        unsubscribe?.()
        DataSource.removeChangeListener(handleChange)
      }
    }, [props])

    return <WrappedComponent data={data} {...props} />
  }

  WithSubscription.displayName = `WithSubscription(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return WithSubscription
}
