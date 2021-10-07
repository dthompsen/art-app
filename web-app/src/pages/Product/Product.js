// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Page from 'material-ui-shell/lib/containers/Page';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import { useIntl } from 'react-intl';
import * as Constants from '../../constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export const PRODUCT_QUERY = gql`
  query productById($id: Int) {
    productById (id: $id) {
      id,
      title,
      img,
      description,
      displays {
        exhibit {
          id,
          venue,
          theme,
          startDate,
          endDate
        }
        price,
        dateSold
      }
    }
  }
`;

function ProductElements(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.product.title}
          image={Constants.ART_LOC + props.product.img}
          title={props.product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => { alert('Edit is TBD') }}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => { alert('Delete is TBD') }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

function DisplayElements(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="10"></TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Theme</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Date Sold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.displays && props.displays.map(display => {
            return(
              <TableRow>
                <TableCell align="left">
                  <IconButton component={RouterLink} to={`/exhibits/${display.exhibit.id}`} aria-label={`Exhibit detail`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="left">{display.exhibit.venue}</TableCell>
                <TableCell align="left">{display.exhibit.theme}</TableCell>
                <TableCell align="left">{display.exhibit.startDate}</TableCell>
                <TableCell align="left">{display.exhibit.endDate}</TableCell>
                <TableCell align="left">{display.price}</TableCell>
                <TableCell align="left">{display.dateSold}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Product = () => {
  const { id } = useParams();
  const { data } = useQuery(PRODUCT_QUERY, {variables: { id }});
  const classes = useStyles();
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'product' })} >
      <IconButton component={RouterLink} to={`/products`} aria-label={`Products`} className={classes.icon}>
        <ArrowBackIcon />
      </IconButton>
      {data && data.productById.map(product => {
        return (
          <>
            <ProductElements product={product} />
            <DisplayElements displays={product.displays} />
          </>
        )
      })}
    </Page>
  );
};

export default Product;
