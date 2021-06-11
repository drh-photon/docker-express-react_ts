import React from 'react';

interface Person {
    id: number;
    first: string;
    last: string;
}

export interface Props {
    text: string;
    person? : Person;
}

const Textbox: React.FC<Props> = () => {
    return (<div>
        <input />
    </div>);
}

export default Textbox;