// Copyright 2021 Dave Thompsen. Subject to the MIT license.
// Adapted from create-react-app material-ui template.
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page';
import FilterDrawer from 'material-ui-shell/lib/components/FilterDrawer'
import FilterList from '@material-ui/icons/FilterList'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SearchField from 'material-ui-shell/lib/components/SearchField'
import Toolbar from '@material-ui/core/Toolbar'
import { useFilter } from 'material-ui-shell/lib/providers/Filter'
import { useIntl } from 'react-intl'
import * as Constants from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
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

const filterName = 'product_filter'

export const ProductListFilter = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  const classes = useStyles();
  const intl = useIntl();
  const { openFilter, getList, getFilter, setSearch } = useFilter();
  const { queries = [], search = {} } = getFilter(filterName);
  const { value: searchValue = '' } = search;
  const fields = [
    {
      name: 'title',
      label: 'Title',
    },
    {
      name: 'description',
      label: 'Description',
    },
  ]

  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'products'})}
      contentStyle={{ overflow: 'hidden' }}
      appBarContent={
        <Toolbar disableGutters>
          <SearchField
            initialValue={searchValue}
            onChange={(v) => {
              setSearch(filterName, v)
            }}
          />
          <IconButton color="inherit" onClick={() => openFilter(filterName)}>
            <FilterList color={queries.length > 0 ? 'secondary' : undefined} />
          </IconButton>
        </Toolbar>
      }
    >
      <ImageList className={classes.imageList}>
      {data && (
        <>
          { getList(filterName, data.allProducts, fields).map((product) => (
            <ImageListItem key={product.id}>
              <img src={Constants.ART_LOC + product.img} alt={product.title} />
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
      <FilterDrawer fields={fields} name={filterName} />
    </Page>
  );
};

export default ProductListFilter;
