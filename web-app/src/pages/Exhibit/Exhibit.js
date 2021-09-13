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
import { useIntl } from 'react-intl';
import * as Constants from '../../constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const EXHIBIT_QUERY = gql`
  query exhibitById($id: Int) {
    exhibitById(id: $id) {
      venue,
      theme,
      startDate,
      endDate
    }
  }
`;

const DISPLAY_QUERY = gql`
  query displaysByExhibitId($id: Int) {
    displaysByExhibitId(id: $id) {
      exhibitId,
      productId,
      price,
      dateSold,
      product {
        id,
        title,
        img
    	}
    }
  }
`;

const Exhibit = () => {
  const { id } = useParams();
  const { data: exhibitData }  = useQuery(EXHIBIT_QUERY, {variables: { id }});
  const { data : displayData } = useQuery(DISPLAY_QUERY, {variables: { id }});
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Page pageTitle={intl.formatMessage({ id: 'exhibit' })} >
      <IconButton component={RouterLink} to={`/exhibits`} aria-label={`Exhibits`} className={classes.icon}>
        <ArrowBackIcon />
        Back to Exhibit List
      </IconButton>
      {exhibitData && (
        <>
          {exhibitData.exhibitById.map((exhibit) => (
            <div>
              <Typography variant="h5" component="h2">
                Venue: {exhibit.venue}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Theme: {exhibit.theme}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Period: {exhibit.startDate} - {exhibit.endDate}
              </Typography>
              <Typography variant="h5" component="h4">
                Products Displayed:
              </Typography>
            </div>
          ))}
        </>
      )}
      {displayData && (
      <>
        {displayData.displaysByExhibitId.map((display) => (

          <div style={{ display: "inline-block" }}>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
              component="img"
              alt={display.product.title}
              image={Constants.ART_LOC + display.product.img}
              title={display.product.title}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {display.product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: $ {display.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {display.dateSold ?
                  (intl.formatMessage({ id: 'sold' }) + " " + display.dateSold) : 
                  intl.formatMessage({ id: 'unsold' }) }
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => { alert('Edit is TBD') }}>
              Edit
              </Button>
              <Button size="small" color="primary" onClick={() => { alert('Remove is TBD') }}>
              Remove
              </Button>
            </CardActions>
          </Card>
        </div>
        ))}
      </>
      )}
    </Page>
  );
};

export default Exhibit;
