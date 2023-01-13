const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {
            id: '1',
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: '2',
            followed: true,
            fullName: 'Maksim',
            status: 'Hard work',
            location: {city: 'Odessa', country: 'Ukraine'}
        },
        {
            id: '3',
            followed: true,
            fullName: 'Alina',
            status: 'Business lady',
            location: {city: 'Altea', country: 'Spaine'}
        },
        {
            id: '4',
            followed: true,
            fullName: 'Vika',
            status: 'Just for fun',
            location: {city: 'New-York', country: 'USA'}
        },
        {
            id: '5',
            followed: false,
            fullName: 'Emiliia',
            status: 'Life is game',
            location: {city: 'Ottawa', country: 'Canada'}
        },
    ]
}
export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        default:
            return state

    }
}

export const followAC = () => {
    return {
        type: 'FOLLOW'
    } as const
}