import {
  ContainerMobile,
  ContainerHabtisGroups
} from "./styles";
import {
  ContainerDesktop,
  OptionsContainerDesktop,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";
import HeaderLogged from "../../components/HeaderLogged";
import { useAuth } from "../../Providers/auth";
import { useState } from "react";
import Username from "../../components/Username";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import ImageGroup1 from "../../images/ImageGroup1.png";
import ImageGroup2 from "../../images/ImageGroup2.png";

const Dashboard = () => {
  
  const viewport = window.innerWidth;

  const { username } = useAuth();
  const [newUsername, setNewUsername] = useState(false);

  const { auth } = useAuth();
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderLogged />
      {viewport < 500 ? (
        <ContainerMobile>
          <h2>Organize sua vida, {username}</h2>
          {newUsername && <Username setNewUsername={setNewUsername} /> }
          <Button onClick={() => {
                setNewUsername(true);
              }} children = 'Trocar usuário' />
          <h4>Escolha uma opção: </h4>
          <OptionsContainerDesktop>
            <ContainerHabtisGroups>
              <Link to={"/habits"}>
                <div className="figure">
                  <img src={ImageGroup1} alt="" />
                </div>

                <p style={{ fontSize: 36 }}>Hábitos</p>
              </Link>
            </ContainerHabtisGroups>

            <ContainerHabtisGroups>
              <Link to={"/groups"}>
                <Link to={"/groups"}>
                  <div className="figure">
                    <img src={ImageGroup2} alt="" />
                  </div>
                </Link>
                <p style={{ fontSize: 36 }}>Grupos</p>
              </Link>
            </ContainerHabtisGroups>
          </OptionsContainerDesktop>
        </ContainerMobile>
      ) : (
        <ContainerDesktop>
          <ContainerTitle>
            
            <p>
              Organize sua vida,&nbsp;
              <span>
                <em>
                  {username}
                </em>
              </span>
              
            </p>
            
            <Button
              onClick={() => {
                setNewUsername(true);
              }}
              style={{ margin: "auto" }}
              >
              Trocar usuário
            </Button>
          </ContainerTitle>
            {newUsername && <Username setNewUsername={setNewUsername} /> }

          <OptionsContainerDesktop>
            <ContainerHabtisGroups>
              <Link to={"/habits"}>
                <div className="figure">
                  <img src={ImageGroup1} alt="" />
                </div>

                <p style={{ fontSize: 36 }}>Hábitos</p>
              </Link>
            </ContainerHabtisGroups>
            <ContainerHabtisGroups>
              <Link to={"/groups"}>
                <Link to={"/groups"}>
                  <div className="figure">
                    <img src={ImageGroup2} alt="" />
                  </div>
                </Link>
                <p style={{ fontSize: 36 }}>Grupos</p>
              </Link>
            </ContainerHabtisGroups>
          </OptionsContainerDesktop>
        </ContainerDesktop>
      )}
    </>
  );
};

export default Dashboard;
