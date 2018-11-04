import styled from 'styled-components';
import { colors, media } from '../../utils/styles';
import { vh, vw, rem } from '../../utils/sizes';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/fauna-background.png');

  ${media.md`justify-content: flex-start;`}
`;

export const Card = styled.section`
  width: ${vw(344)};
  height: ${vh(390)};
  margin-top: ${vh(-26)};
  border-radius: ${vw(5)};
  position: absolute;
  background-color: ${colors.white};
  padding: ${vh(62)} ${vh(20)} 0;

  ${media.ph`
    margin-top: 0;
    width: ${vw(374, 'ph')};
    height: ${vh(410, 'ph')};
    border-radius: ${vw(5, 'ph')};
    padding: ${vh(62, 'ph')} ${vh(32, 'ph')} 0;
  `}

  ${media.sm`
    margin-top: ${vh(-128, 'sm')};
    width: ${vw(416, 'sm')};
    height: ${vh(416, 'sm')};
    border-radius: ${vw(5, 'sm')};
    padding: ${vh(65, 'sm')} ${vh(55, 'sm')} 0;
  `}

  ${media.md`
    height: 100%;
    margin-top: 0;
    border-radius: 0;
    position: relative;
    width: ${rem(524)};
    padding: ${rem(177)} ${rem(134)} 0 ${rem(80)};
  `}

  ${media.lg`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${rem(547)};
    padding: ${rem(1)} ${rem(157)} 0 ${rem(80)};
  `}
`;

export const CardTitle = styled.h1`
  font-size: ${vh(16)};
  color: ${colors.black};
  text-align: center;
  text-transform: uppercase;

  ${media.ph`font-size: ${vh(16, 'ph')};`}
  ${media.sm`font-size: ${vh(16, 'sm')};`}
  ${media.md`
    font-size: ${rem(16)};
    text-align: left;
  `}
`;

export const CardSubtitle = styled.h2`
  font-size: ${vh(32)};
  font-weight: 600;
  color: ${colors.darkBlue};
  text-transform: unset;
  text-align: center;
  margin-top: ${vh(6)};

  ${media.ph`
    font-size: ${vh(32, 'ph')};
    margin-top: ${vh(6, 'ph')};
  `}
  
  ${media.sm`
    font-size: ${vh(32, 'sm')};
    margin-top: ${vh(6, 'sm')};
  `}

  ${media.md`
    text-align: left;
    font-size: ${rem(32)};
    margin-top: ${rem(6)};
  `}
`;

export const SmallContent = styled.div`
  display: flex;
  margin-top: ${vh(27)};
  justify-content: center;

  ${media.ph`margin-top: ${vh(22, 'ph')};`}
  ${media.sm`margin-top: ${vh(27, 'sm')};`}
  ${media.md`
    margin-top: ${rem(27)};
    margin-left: ${rem(-18)};
  `}
  ${media.lg`
    margin-top: ${rem(22)};
    margin-left: ${rem(20)};
  `}
`;

export const SmallText = styled.small`
  font-size: ${vh(14)};
  display: inline-block;
  color: ${colors.regularGrey};

  ${media.ph`font-size: ${vh(14, 'ph')};`}
  ${media.sm`font-size: ${vh(14, 'sm')};`}
  ${media.md`font-size: ${rem(14)};`}
`;

export const SmallLink = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: ${vh(14)};
  margin-left: ${vw(6)};
  padding-bottom: ${vh(1)};
  color: ${colors.blueRoyal};
  transition: 377ms ease-in-out;
  transition-property: border-bottom, color;
  border-bottom: 1px solid ${colors.blueRoyal};

  ${media.ph`
    font-size: ${vh(14, 'ph')};
    margin-left: ${vw(11, 'ph')};
    padding-bottom: ${vh(1, 'ph')};
  `}

  ${media.sm`
    font-size: ${vh(14, 'sm')};
    margin-left: ${vw(11, 'sm')};
    padding-bottom: ${vh(1, 'sm')};
  `}

  ${media.md`
    font-size: ${rem(14)};
    margin-left: ${rem(6)};
    padding-bottom: ${rem(1)};
  `}

  &:hover {
    color: ${colors.darkBlue};
    border-bottom: 1px solid ${colors.darkBlue};
  }
`;
