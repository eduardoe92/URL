export const loginWithGithub = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/github`, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();
        return data.user;
    } catch (error) {
        console.error('Error en la autenticación con GitHub:', error);
    }
};

export const logout = async () => {
    try {
        await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};
