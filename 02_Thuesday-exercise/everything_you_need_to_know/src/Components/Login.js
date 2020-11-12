function Login({isLoggedIn, setIsLoggedIn, loginMsg}) {
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
        console.log('login component ' + isLoggedIn);
    }
    return (
        <div>
            msg
            <button onClick={handleClick}>{loginMsg}</button>
        </div>
    )
}

export default Login;