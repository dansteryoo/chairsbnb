

export const signup = (user) => (
    $.ajax({
        url: `/api/users`,
        method: 'POST',
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
);

export const logindemo = () => (
    $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: {
            user: {
                email: 'wxyz123@gmail.com',
                password: 'tommy123'
            }
        }
    })
);

export const fetchUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: 'GET'
    })
);

export const fetchUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
);

export const updateUser = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
);

export const deleteUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'DELETE'
    })
);
