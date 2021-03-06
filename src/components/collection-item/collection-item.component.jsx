import './collection-item.styles.scss';

import React from 'react';

const CollectionItem = ({ item, name, price, imageUrl }) => (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
    </div>

)
export default CollectionItem;