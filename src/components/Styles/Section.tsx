import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  top: 0px;
  width: 100%;
  min-height: 100vw;
  z-index: 5;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

export const SectionH2 = styled.h2`
  position: absolute;
  color: #094b65;
  font-size: 10vw;
  text-align: center;
  line-height: 0.55em;
  font-weight: 500;
  font-family: "Rancho", cursive;
  transform: translateY(-50%);

  span {
    font-size: 0.2em;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
`;

export const ExploreBtn = styled.a`
  display: inline-block;
  padding: 8px 30px;
  font-size: 1.2em;
  color: #094b65;
  background: white;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 40px;
  transform: translateY(100px);
`;