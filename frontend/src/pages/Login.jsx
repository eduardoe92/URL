import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={login} className="btn">
        Iniciar sesión con GitHub
      </button>
    </div>
  );
};

export default Login;
