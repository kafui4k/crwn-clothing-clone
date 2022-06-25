import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {CartContext} from '../../provider/cart/cart.provider';

import './collection-item.styles.scss';
import {useContext} from 'react';

const CollectionItem = ({item}) => {
    const {imageUrl, name, price} = item;
    const {addItem} = useContext(CartContext);

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
