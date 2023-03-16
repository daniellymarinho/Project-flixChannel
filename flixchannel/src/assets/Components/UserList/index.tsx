import { Users } from "../../../database";
import { UserItem } from "./UserItem";
import { StyleUserList } from "./style";

export const UsersList = () => {

  return (
    
      <StyleUserList>
        {Users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
       
      </StyleUserList>
    
  );
};
