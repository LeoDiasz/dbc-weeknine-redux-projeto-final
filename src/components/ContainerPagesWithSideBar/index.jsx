import { SideBar } from "../SideBar"
import { DivContainer, SectionPagesWithSideBar, MainPageWithSideBar } from "./styles"

export const ContainerPagesWithSideBar = ({children, isMain, gap}) => {
  return (
    <DivContainer>
      <SideBar/>
      {isMain ? 
        <MainPageWithSideBar gap={gap && gap}>
          {children}
        </MainPageWithSideBar> 
      :
        <SectionPagesWithSideBar gap={gap && gap}>
          {children}
        </SectionPagesWithSideBar>
      }    
    </DivContainer>
  )
}
