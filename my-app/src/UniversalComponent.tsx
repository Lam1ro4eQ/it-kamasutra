import React, {FC} from 'react';

type PropsType = {
    title: string
    children: React.ReactNode
}

export const UniversalComponent = (props:PropsType) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default UniversalComponent;
