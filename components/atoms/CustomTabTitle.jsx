import { Box, Button, useMultiStyleConfig, useTab } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const CustomTabTitle = forwardRef((props, ref, { number }) => {
  const tabProps = useTab({ ...props, ref })
  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps)
  return (
    <Button __css={styles.tab} {...tabProps}>
      {tabProps.children}
      <Box as="span" ml="2">
        {number}
      </Box>
    </Button>
  )
})

export default CustomTabTitle
