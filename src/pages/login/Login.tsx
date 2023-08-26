import { Button, CardMedia, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';

/* This is an expression to make the div always position well vertically
 40px - the downward flexbox, 527px the div height
 This basically position the div in a 1:2 ratio from top to bottom*/
const topMargin = 'calc((100vh - 40px - 527px) / 3)';

export default function Login() {
  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <>
      <Box sx={{ ml: '182px', mt: topMargin, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: '634px' }}>
        <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '36px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
            <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: '150.192px', height: '55px' }} />
            <Typography variant="h1">Welcome to the Product Security Platform</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '400px', alignItems: 'flex-start', gap: '28px' }}>
              <TextField label="Username" />
              <TextField label="Password" type="password" />
            </Box>
            <Box sx={{ display: 'flex', height: '112px', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Button variant="hover" sx={{ fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.1px', padding: '0.12rem 0.25rem' }}>
                Forgot your password?
              </Button>
              <Button variant="primary" sx={{ clear: 'both', width: '100%' }}>
                Log in
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: '40px', width: '400px' }}>
          {Object.keys(bottomLinks).map((link) => (
            <Button variant="hover" key={link}>
              {link}
            </Button>
          ))}
        </Box>
      </Box>

      {/* <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4, width: 300 }} /> */}
    </>
  );
}