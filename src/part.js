import React from 'react';

export function Part({ partId, partName }) {
    return (
        <div className="part" data-partid={partId}>
            <span>{partName}</span>
        </div>
        )
}
