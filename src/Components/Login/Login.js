import React from 'react'

const Login = ({history}) => {
    function handleClick() {
        /* eslint no-restricted-globals:0 */
        history.push("/");
      }
    return (
        <div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}

export default Login
