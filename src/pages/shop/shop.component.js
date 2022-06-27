import React from 'react';
import {Route} from 'react-router-dom';

import {default as CollectionsOverviewContainer} from '../../components/collections-overview/collections-overview.container';
import {default as CollectionPageContainer} from '../collection/collection.container';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

export default ShopPage;
