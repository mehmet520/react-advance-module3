// src/hooks/useSubscription.js
import * as React from 'react'
import DataSource from '../services/dataSource'

// Tek sorumluluk: herhangi bir veri kaynağı seçme fonksiyonuna abone olma
export default function useSubscription(selectData, props, deps = []) {
  const [data, setData] = React.useState(() => selectData(DataSource, props))

  React.useEffect(() => {
    const handleChange = () => setData(selectData(DataSource, props))

    const unsubscribe = DataSource.addChangeListener(handleChange)
    // İlk mount sonrası veriyi garanti altına almak istersen:
    // handleChange();

    return () => {
      unsubscribe?.()
      DataSource.removeChangeListener(handleChange) // biri yeterli; ikisi de idempotent
    }
    // selectData referansı değişiyorsa üst seviyede useCallback ile sabitleyebilirsiniz.
  }, [selectData, ...deps])

  return data
}
