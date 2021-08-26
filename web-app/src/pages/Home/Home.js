// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
        TBD
      </Scrollbar>
    </Page>
  )
}
export default HomePage
