import '@testing-library/jest-dom' // RTL matcher'larini ekler (toBeInTheDocument(), vb.)

// Node ortamına TextEncoder / TextDecoder ekle
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

jest.setTimeout(10000)
