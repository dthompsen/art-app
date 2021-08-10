import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const ART_LOC = "/art/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 800,
    height: 600,
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

  return (
    <div>
      Products
      <div className={classes.root}>
        <ImageList>
        {data && (
          <>
            {data.allProducts.map((product) => (
              <ImageListItem key={product.id}>
                <img src={ART_LOC + product.img} alt={product.title} />
                <ImageListItemBar
                  title={product.title}
                  actionIcon={
                    <IconButton aria-label={`info about ${product.title}`} className={classes.icon}>
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
    </div>
  );
};

export default ProductList;
