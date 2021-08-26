// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
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
            <p>
            The Art Manager application is a simple demonstration web app that
            uses a React-based front-end to manage an artist's artwork
            inventory and submissions to exhibitions.
            </p>
            <p>
            Version: (work-in-progress)
            <br/>MIT License, copyright 2021 Dave Thompsen
            </p>
          </Typography>
        </div>
      </Scrollbar>
    </Page>
  )
};

export default About;
