import { useContext } from "react";

export const UserProfile = () => {
  const { userData, setUserData } = useContext(userContect);

  return (
    <aside>
      <h2>Userprofil</h2>
      <img src="" alt="" />
      <label htmlFor="">Username</label>
    </aside>
  );
};
