import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useIntl } from 'react-intl'

const ART_LOC = "/art/"; // TO-DO: make constants file

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 1000,
    height: 1000,
    gap: 5,
    rowHeight: 310,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export const PRODUCT_QUERY = gql`
  {
    allProducts {
      id,
      title,
      img,
      description
    }
  }
`;

export const ProductList = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  const classes = useStyles();
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'products' })} >
      <div className={classes.root}>
        <ImageList className={classes.imageList} >
        {data && (
          <>
            {data.allProducts.map((product) => (
              <ImageListItem key={product.id}>
                <img src={ART_LOC + product.img} alt={product.title} />
                <ImageListItemBar
                  title={product.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton component={RouterLink} to={`/products/${product.id}`} aria-label={`Product detail`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </>
        )}
        </ImageList>
      </div>
    </Page>
  );
};

export default ProductList;
