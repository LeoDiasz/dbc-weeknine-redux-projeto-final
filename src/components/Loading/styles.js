import styled from "styled-components";

const LoadingContainer = styled.div`
  background-color: rgba(f, f, f, 0.1);
`

const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  padding: 10px;
  background-color: var(--color-background-light);
  border-radius: 8px;
  color: var(--color-text-gray-dark);

  @media (max-width: 780px) {
    width: 400px;
  
  }

  @media (max-width: 576px) {
    width: 300px;
  
  }

`

export {LoadingContent, LoadingContainer}