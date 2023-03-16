import { IUser } from "../../../../database";
import { StyledUserItem } from "./style";

interface User {
  user: IUser;
}

export const UserItem = ({ user }: User) => {
  return (
    <StyledUserItem>
      <img src={user.img} alt="" />
      <span>{user.name}</span>
    </StyledUserItem>
    
  );
};
