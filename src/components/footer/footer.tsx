import React from "react";
import {
  FooterContainer,
  Info,
  TextWrapper,
  BackIcon,
  LeftButton,
  ButtonContainer,
  RightButton,
  SideInfo,
} from "./footer.styled";
import { useNavigate } from "react-router-dom";
import { styledLink as Link } from "../../routes/link.styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { totalProductTypeAdded } from "../../redux/slices/cart";

interface IFooterProps {
  nextPage: string;
  backButton: boolean;
  sideInfo: boolean;
  prevPage: string;
  nextPageUrl: string;
  prevPageUrl: string;
}

function Footer({
  nextPage,
  prevPage,
  backButton,
  nextPageUrl,
  prevPageUrl,
  sideInfo,
}: IFooterProps) {
  const totalAdded: number = useSelector(totalProductTypeAdded);
  var active = sideInfo ? (totalAdded > 0 ? false : true) : false;

  useEffect(() => {}, [backButton, totalAdded, active]);
  let navigate = useNavigate();
  return (
    <FooterContainer>
      <TextWrapper>
        {backButton === true ? (
          <>
            <LeftButton>
              <Link to={prevPageUrl}>
                <BackIcon size={22} />
                {prevPage}
              </Link>
            </LeftButton>
          </>
        ) : (
          <div></div>
        )}
        <ButtonContainer>
          {sideInfo ? (
            <SideInfo> {totalAdded} product chosen</SideInfo>
          ) : (
            <div></div>
          )}
          <RightButton
            disabled={active}
            onClick={() => {
              navigate(nextPageUrl);
            }}
          >
            <Info>{nextPage}</Info>
          </RightButton>
        </ButtonContainer>
      </TextWrapper>
    </FooterContainer>
  );
}

export default Footer;
