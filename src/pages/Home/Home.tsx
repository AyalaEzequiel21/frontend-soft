import logo from '../../assets/logo.png'

export const Home = () => {
    
    return (
        <>
            <h1>Home</h1>
            <img src={logo}  style={{
                "height": "8em",
                "padding": "1.5em",
                "willChange": "filter",
                "transition": "filter 300ms"
            }} alt="logo" />
        </>
    )
}