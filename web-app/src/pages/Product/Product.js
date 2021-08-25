import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'react-intl'

const ART_LOC = "/art/"; // TO-DO: make constants file

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
      {data && (
        <>
          {data.productById.map((product) => (
            <>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.title}
                  image={ART_LOC + product.img}
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
