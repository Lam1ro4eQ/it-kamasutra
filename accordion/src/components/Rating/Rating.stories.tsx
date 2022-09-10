import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    components: Rating
}


export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const EmptyRating1 = () => <Rating value={1} onClick={x => x}/>
export const EmptyRating2 = () => <Rating value={2} onClick={x => x}/>
export const EmptyRating3 = () => <Rating value={3} onClick={x => x}/>
export const EmptyRating4 = () => <Rating value={4} onClick={x => x}/>
export const EmptyRating5 = () => <Rating value={5} onClick={x => x}/>
export const ChangeRating = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} onClick={setRatingValue}/>
}