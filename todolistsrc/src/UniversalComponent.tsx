import * as React from 'react';

type PropsType = {
    title: string
    children?: React.ReactNode
}

export const UniversalComponent: React.FC<PropsType> = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <span>yes</span>
                <span>no</span>
                {children}
            </div>
        </div>
    );
};

