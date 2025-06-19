import { Typography, type TypographyProps } from '@mui/material';
import { styled } from '@mui/system';

const StyledTitle = styled(Typography)(() => ({
  display: 'flex',
  color: '#5A607F',
  fontSize: '14px',
  fontWeight: '400',
  marginTop: '15px',
}));

const Title = (props: TypographyProps) => {
  return <StyledTitle {...props} />;
};

export default Title;
