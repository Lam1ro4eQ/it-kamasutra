import React from 'react';
import {action} from "@storybook/addon-actions";
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    components: Rating
}


export const EmptyRating = () =>  <Rating value={0} onClick={x=>x}/>
export const EmptyRating1 = () =>  <Rating value={1} onClick={x=>x}/>
export const EmptyRating2 = () =>  <Rating value={2} onClick={x=>x}/>
export const EmptyRating3 = () =>  <Rating value={3} onClick={x=>x}/>
export const EmptyRating4 = () =>  <Rating value={4} onClick={x=>x}/>
export const EmptyRating5 = () =>  <Rating value={5} onClick={x=>x}/>