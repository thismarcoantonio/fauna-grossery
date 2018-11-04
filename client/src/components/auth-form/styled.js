import styled from 'styled-components';
import { colors, media } from '../../utils/styles';
import { vh, vw, rem } from '../../utils/sizes';

export const Form = styled.form`
  margin-top: ${vh(53)};

  ${media.ph`margin-top: ${vh(52, 'ph')};`}
  ${media.sm`margin-top: ${vh(53, 'sm')};`}
  ${media.md`margin-top: ${rem(53)};`}
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  display: block;
  font-size: ${vh(14)};
  font-family: 'lato-web';
  border-radius: ${vw(3)};
  margin-bottom: ${vh(10)};
  color: ${colors.darkBlue};
  border: 2px solid;
  border-color: ${colors.lightGrey};
  padding: ${vh(12)} ${vw(13)} ${vh(12)};
  transition: border-color 277ms;

  ${media.ph`
    font-size: ${vh(14, 'ph')};
    border-radius: ${vw(3, 'ph')};
    margin-bottom: ${vh(10, 'ph')};
    padding: ${vh(12, 'ph')} ${vw(13, 'ph')} ${vh(12, 'ph')};
  `}

  ${media.sm`
    font-size: ${vh(14, 'sm')};
    border-radius: ${vw(3, 'sm')};
    margin-bottom: ${vh(10, 'sm')};
    padding: ${vh(12, 'sm')} ${vw(13, 'sm')} ${vh(12, 'sm')};
  `}

  ${media.md`
    font-size: ${rem(14)};
    border-radius: ${rem(3)};
    margin-bottom: ${rem(9)};
    padding: ${rem(12)} ${rem(13)} ${rem(12)};
  `}

  ${media.lg`
    font-size: ${rem(14)};
    border-radius: ${rem(3)};
    margin-bottom: ${rem(10)};
    padding: ${rem(12)} ${rem(13)} ${rem(12)};
  `}

  &::placeholder {
    color: ${colors.darkBlue};
  }

  &:focus {
    border-color: ${colors.blueRoyal};
  }
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  cursor: pointer;
  margin-top: ${vh(10)};
  color: ${colors.white};
  border-radius: ${vw(3)};
  padding: ${vh(12)} 0 ${vh(12)};
  background-color: ${colors.blueRoyal};
  transition: background-color 377ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${colors.blueRoyalDarken};
  }

  ${media.ph`
    margin-top: ${vh(10, 'ph')};
    border-radius: ${vw(3, 'ph')};
    padding: ${vh(13, 'ph')} 0 ${vh(12, 'ph')};
  `}

  ${media.sm`
    margin-top: ${vh(15, 'sm')};
    border-radius: ${vw(3, 'sm')};
    padding: ${vh(13, 'sm')} 0 ${vh(12, 'sm')};
  `}

  ${media.md`
    margin-top: ${rem(11)};
    border-radius: ${rem(3)};
    padding: ${rem(13)} 0 ${rem(12)};
  `}

  
  ${media.lg`
    margin-top: ${rem(15)};
  `}
`;
