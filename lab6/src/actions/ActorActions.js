export const USER_ADD = 'USER_ADD';
export const USER_DELETE = 'USER_DELETE';
export const USER_EDIT = 'USER_EDIT';

export const addUserAction = (payload) => ({
    type: USER_ADD,
    payload
});

export const deleteUserAction = (payload) => ({
    type: USER_DELETE,
    payload
})

export const editUserAction = (payload) => ({
    type: USER_EDIT,
    payload
})