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
      endDate,
      displays {
        product {
          id,
          title,
          description,
          img
        },
        price,
        dateSold
      }
    }
  }
`;

function ExhibitElements(props) {
  return (
    <div>
      <Typography variant="h5" component="h2">
        Venue: {props.exhibit.venue}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Theme: {props.exhibit.theme}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Period: {props.exhibit.startDate} - {props.exhibit.endDate}
      </Typography>
      <Typography variant="h5" component="h4">
        Products Displayed:
      </Typography>
    </div>
  );
}

function DisplayElements(props) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <div style={{ display: "inline-block" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
          component="img"
          alt={props.display.product.title}
          image={Constants.ART_LOC + props.display.product.img}
          title={props.display.product.title}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.display.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: $ {props.display.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.display.dateSold ?
              (intl.formatMessage({ id: 'sold' }) + " " + props.display.dateSold) :
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
  )
}

const Exhibit = () => {
  const { id } = useParams();
  const { data }  = useQuery(EXHIBIT_QUERY, {variables: { id }});
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Page pageTitle={intl.formatMessage({ id: 'exhibit' })} >
      <IconButton component={RouterLink} to={`/exhibits`} aria-label={`Exhibits`} className={classes.icon}>
        <ArrowBackIcon />
        Back to Exhibit List
      </IconButton>
      {data && data.exhibitById.map(exhibit => {
        return (
          <>
            <ExhibitElements exhibit={exhibit} />
            {exhibit && exhibit.displays.map(display => {
              return(<DisplayElements display={display} />)
            })}
          </>
        )
      })}
    </Page>
  );
};

export default Exhibit;
