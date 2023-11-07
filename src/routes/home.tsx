import { auth } from "../firebase";
import styled from "styled-components";

const LogOut = styled.button`
  width: 100px;
  height: 20px;
`;

export default function Home() {
  const logOut = () => {
    auth.signOut();
    console.log("success log out maybe");
  };
  return <LogOut onClick={logOut}>Log-Out</LogOut>;
}
