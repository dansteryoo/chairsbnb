

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
        method: "POST",
        url: `/api/session`,
        data: {
            user: {
                email: "dansteryoo@gmail.com",
                password: "123456"
            }
        }
    })
);