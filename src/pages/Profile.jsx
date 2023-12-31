import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../styles/constants";

const SContainer = styled.div`
  padding: 16px;
  margin: auto;
`;

const STitle = styled.h1``;

const SContent = styled.div`
  margin: 32px 0;
  display: flex;
  border-radius: 6px;
  border: 1px solid ${colors.border};
`;

const SLeft = styled.div`
  padding: 16px;
  width: 50%;
`;
const SRight = styled.div`
  padding: 16px;
  width: 50%;
`;

const SGroup = styled.div``;

const SLabel = styled.label`
  color: ${colors.weakText};
`;

const SField = styled.p`
  padding: 16px 0;
  font-size: 1.2rem;
`;

export const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  return (
    <SContainer>
      <STitle>profile</STitle>
      <SContent>
        <SLeft>
          <SGroup>
            <SLabel>プロフィール</SLabel>
            <SField>
              <img
                src={user.profileUrl}
                alt="プロフィール"
                width="60"
                height="60"
              />
            </SField>
          </SGroup>
        </SLeft>
        <SRight>
          <SGroup>
            <SLabel>ユーザ名</SLabel>
            <SField>{user.name}</SField>
          </SGroup>
          <SGroup>
            <SLabel>メールアドレス</SLabel>
            <SField>{user.email}</SField>
          </SGroup>
        </SRight>
      </SContent>
    </SContainer>
  );
};
