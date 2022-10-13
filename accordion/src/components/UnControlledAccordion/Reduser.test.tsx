import {reduser, StateType, TOGGLE_COLLAPSED} from "./Reduser";

test('collapsed should be true', () => {
    //data
    const state:StateType = {
        collapsed: false
    }

    //action
    const newState = reduser(state, {type:TOGGLE_COLLAPSED})


    //expection
expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state:StateType = {
        collapsed: true
    }

    //action
    const newState = reduser(state, {type:TOGGLE_COLLAPSED})


    //expection
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be error', () => {
    //data
    const state:StateType = {
        collapsed: true
    }

    //action
    // const newState = reduser(state, {type:'FAKETYPE'})


    //expection
    expect( ()=> {
        reduser(state, {type:'FAKETYPE'})
    } ).toThrowError();
})