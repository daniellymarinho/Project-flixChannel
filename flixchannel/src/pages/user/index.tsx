import { UsersList } from "../../assets/Components/UserList"
import { StyledUserPage } from "./style";

export const UserPage = () => {
  return (
    <StyledUserPage>
      <header>
        <h1>FlixChanell</h1>
      </header>
      <h2>Quem está assistindo?</h2>
      <UsersList/>
      <button >Gerenciar perfil</button>
    </StyledUserPage>
  );
};
