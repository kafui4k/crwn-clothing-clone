import React, {useContext} from 'react';

import CollectionPreview from '../preview-collection/collection-preview';
import CollectionsContext from '../../context/collections/collections.context';

const CollectionsOverviewContainer = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(
        (key) => collectionsMap[key],
    );

    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default CollectionsOverviewContainer;
