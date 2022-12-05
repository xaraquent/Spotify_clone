export function getAccessTokenFromStorage() {
    const token = window.sessionStorage.getItem('spotifyToken');
    return token;
}
