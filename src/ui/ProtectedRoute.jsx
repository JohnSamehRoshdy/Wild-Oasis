import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // here are the steps to create Protected Route component that used to protect your app that only authorized user can access it .. this is a good structure
  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //3. If there is no authenticated user , redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. while loading show a spinner

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user .. render the app !!
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
