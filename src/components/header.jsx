import React from 'react';

export default function Header() {
    return (
        <header className="flex-column flex-center padding-all-1">
            <h1>King of the Beasts</h1>
            <div>
             <p>If the king does not lead, how can he expect his subordinates to follow?</p>
            </div>
            <ul className='flex-row flex-gap-1 bold secondary-text-color padding-tb-1 padding-lr-1 border-bottom font-size-1'>
                <li>Drive</li>
                <li>Perserverance</li>
                <li>Manifestation</li>
                <li>Determination</li>
                <li>Hunger</li>
                <li>Discipline</li>
                <li>Passion</li>
            </ul>
        </header>
    )

}