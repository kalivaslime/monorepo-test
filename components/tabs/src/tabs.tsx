import React from 'react'
import * as AriaTabs from '@radix-ui/react-tabs'

type TabsProps = {}

export const Tabs = (props: TabsProps) => {
  return (
    <AriaTabs.Root defaultValue='tab1'>
      <AriaTabs.List aria-label='tabs example'>
        <AriaTabs.Trigger value='tab1'>
          <div>
            <div>One</div>
          </div>
        </AriaTabs.Trigger>
        <AriaTabs.Trigger value='tab2'>Two</AriaTabs.Trigger>
        <AriaTabs.Trigger value='tab3'>Three</AriaTabs.Trigger>
      </AriaTabs.List>
      <AriaTabs.Content value='tab1'>Tab one content</AriaTabs.Content>
      <AriaTabs.Content value='tab2'>Tab two content</AriaTabs.Content>
      <AriaTabs.Content value='tab3'>Tab three content</AriaTabs.Content>
    </AriaTabs.Root>
  )
}
