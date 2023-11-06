import { auth } from "../firebase";

export default function Home() {
  const logOut = () => {
    auth.signOut();
    console.log("success log out maybe");
  };
  return <button onClick={logOut}>Log Out</button>;
}
