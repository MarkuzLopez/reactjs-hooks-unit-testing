import React, { memo } from 'react'

export const Small = memo (({ value }) => {
    console.log('Me volvi a llamar :( ');
    return (
        <div>
            <small>{value}</small>
        </div>
    )
}
)