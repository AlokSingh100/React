

function UserGeeeting(props){
const welmassage = <h1 className="">Welcome User</h1>
const notwelmassage = <h1> Not Log in</h1>


   return(props.isLogin ? welmassage : notwelmassage);
}
export default UserGeeeting