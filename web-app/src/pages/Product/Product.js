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

export const PRODUCT_QUERY = gql`
  query productById($id: Int) {
    productById (id: $id) {
      id,
      title,
      img,
      description
    }
  }
`;

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
      {data && (
        <>
          {data.productById.map((product) => (
            <>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={Constants.ART_LOC + product.img}
                  title={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
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
              </>
            ))}
          </>
        )}
    </Page>
  );
};

export default Product;
