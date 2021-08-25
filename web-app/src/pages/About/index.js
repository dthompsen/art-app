import React from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import Typography from '@material-ui/core/Typography';

const About = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'about', defaultMessage: 'About' })}>
      <Scrollbar>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <Typography>
            TBD
          </Typography>
        </div>
      </Scrollbar>
    </Page>
  )
};

export default About;
