import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to Cart
            </CustomButton>
        </div>
    );
};

export default CollectionItem;
