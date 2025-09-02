import { Box, useToken } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function ChakraSwitch({ on, onClick, ...props }) {
  const [green500, gray300] = useToken('colors', ['green.500', 'gray.300'])

  return (
    <div className="flex items-center gap-4 bg-yellow-500">
      <h3 className="text-gray-800">Chakra Switch:</h3>
      <Box
        as="button"
        role="switch"
        aria-checked={on}
        onClick={onClick}
        transition="background-color 0.3s ease-in-out"
        bg={on ? green500 : gray300}
        display="flex"
        alignItems="center"
        w="56px" // ≈ Tailwind: w-14
        h="32px" // ≈ Tailwind: h-8
        p="6px"
        rounded="full"
        cursor="pointer"
        {...props}
      >
        <Box
          transition="transform 0.3s ease-in-out"
          transform={on ? 'translateX(24px)' : 'translateX(0)'}
          w="24px" // ≈ Tailwind: w-6
          h="24px" // ≈ Tailwind: h-6
          bg="white"
          rounded="full"
          boxShadow="md"
        />
      </Box>
    </div>
  )
}

ChakraSwitch.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
