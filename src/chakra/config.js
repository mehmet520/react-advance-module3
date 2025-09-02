import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react'

// Button'a xl boyutu ekleyen basit bir recipe (v3)
const buttonRecipe = defineRecipe({
  variants: {
    size: {
      xl: {
        fontSize: 'lg',
        px: 6,
        py: 3,
      },
    },
  },
})

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: '#f2efff',
          100: '#e6e0ff',
          200: '#c7bcff',
          300: '#a898ff',
          400: '#8b79f9',
          500: '#6c5cf7', //App icinde kullandigimiz ton
          600: '#5649b5',
          700: '#413684',
          800: '#2b2453',
          900: '#171223',
        },
      },
    },
    // Built-in Button bilesenlerinin recipe'ini genisletiyoruz
    recipes: {
      button: buttonRecipe,
    },
  },
})

const system = createSystem(defaultConfig, config)
export default system
