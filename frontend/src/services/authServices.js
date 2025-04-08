const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
    throw new Error('La variable de entorno VITE_API_URL no está definida');
}

export const loginWithGithub = async () => {
    try {
        const response = await fetch(`${apiUrl}/auth/github`, {
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
        await fetch(`${apiUrl}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};
