import { LoadingContent, LoadingContainer } from "./styles"

export const Loading = () => {
  return (
    <LoadingContainer className="react-modal-overlay">
      <LoadingContent>
        <h2>Carregando....</h2>
      </LoadingContent>
    </LoadingContainer>
  )
}