import jwt from 'jsonwebtoken'


export const getUserRole = (token: string) => {
    const decodedToken = jwt.verify(token, import.meta.env.VITE_SECRET_KEY_SIGN)

    console.log(decodedToken);
    
}