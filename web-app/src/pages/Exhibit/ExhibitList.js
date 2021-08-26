// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useIntl } from 'react-intl'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export const EXHIBIT_QUERY = gql`
  {
    allExhibits {
      id,
      venue,
      theme,
      startDate,
      endDate
    }
  }
`;

export const ExhibitList = () => {
  const { data } = useQuery(EXHIBIT_QUERY);
  const classes = useStyles();
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'exhibits' })}>
      <div className={classes.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Venue</TableCell>
                <TableCell>Theme</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && (
                <>
                  {data.allExhibits.map((exhibit) => (
                    <TableRow>
                      <TableCell align="left">{exhibit.venue}</TableCell>
                      <TableCell align="left">{exhibit.theme}</TableCell>
                      <TableCell align="left">{exhibit.startDate}</TableCell>
                      <TableCell align="left">{exhibit.endDate}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Page>
  );
};

export default ExhibitList;
