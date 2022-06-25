import React from 'react';

import CollectionPreview from '../preview-collection/collection-preview';
import CollectionsContext from '../../context/collections/collections.context';

import './collections-overview.styles.scss';
import {useContext} from 'react';

const CollectionsOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(
        (key) => collectionsMap,
    );
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default CollectionsOverview;
