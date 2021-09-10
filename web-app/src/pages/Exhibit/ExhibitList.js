// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useIntl } from 'react-intl';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    maxWidth: 1000,
  },
  table: {

  },
  icon: {
    color: 'rgba(128, 128, 128)',
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
                <TableCell width="10"></TableCell>
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
                      <TableCell align="left">
                        <IconButton component={RouterLink} to={`/exhibits/${exhibit.id}`} aria-label={`Exhibit detail`} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      </TableCell>
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
