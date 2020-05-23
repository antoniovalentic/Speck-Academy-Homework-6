import apiOrigin from './api';

export const getEvents = (authToken) => {
    return fetch(`${apiOrigin}/events`, {
        headers: {
            Authorization: `${authToken}`,
        },
    }).then(res => res.json());
}