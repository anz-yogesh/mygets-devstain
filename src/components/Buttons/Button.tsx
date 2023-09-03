/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Button } from '@fluentui/react-components'
import type { ButtonProps } from '@fluentui/react-components'

export const MyGetsButton = (props: ButtonProps) => (
  <Button {...props}>{props.children}</Button>
)
