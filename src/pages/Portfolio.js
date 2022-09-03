import React, { useState, createRef } from 'react';
import {
  Box,
  Typography,
  Stack,
  Modal,
  // Grid,
  // Card,
  // CardContent
} from '@mui/material';
import { Masonry } from '@mui/lab';
// import { Feed, Person, Code, Preview } from '@mui/icons-material';

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9
} from '../assets';
import { Footer, PortfolioModalCard } from '../components';

const navList = ['All', 'Video', 'Web Design', 'Logo', 'Graphic Design'];

const itemData = [
  { image: image1, title: 'UI/UX', subtitle: 'Chul urina', color: '#FFF0F0' },
  { image: image2, title: 'Logo', subtitle: 'Chul urina', color: '#FFF3FC' },
  {
    image: image3,
    title: 'Ui/UX',
    subtitle: 'T-Shirt Design',
    color: '#FFF3FC'
  },
  {
    image: image4,
    title: 'UI/UX',
    subtitle: 'Packaging Box',
    color: '#E9FAFF'
  },
  {
    image: image5,
    title: 'Video',
    subtitle: 'Modern Bag Design',
    color: '#F4F4FF'
  },
  {
    image: image6,
    title: 'Web Desgin',
    subtitle: 'Aura Dione',
    color: '#FFFAE9'
  },
  { image: image7, title: 'Video', subtitle: 'Chul urina', color: '#F4F4FF' },
  {
    image: image8,
    title: 'Web Design',
    subtitle: 'Aura Dione',
    color: '#FFF0F8'
  },
  { image: image9, title: 'Video', subtitle: 'Chul urina', color: '#F4F4FF' }
];

const projects = [
  {
    title: 'UI/UX Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner1,
    id: 'card1'
  },
  {
    title: 'Logo Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner2,
    id: 'card2'
  },
  {
    title: 'T-Shirt Design Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner3,
    id: 'card3'
  },
  {
    title: 'Packaging Box Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner4,
    id: 'card4'
  },
  {
    title: 'Modern Bag Design Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner5,
    id: 'card5'
  },
  {
    title: 'Aura Dione Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner6,
    id: 'card6'
  },
  {
    title: 'UI/UX Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner7,
    id: 'card7'
  },
  {
    title: 'Aura Dione Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner8,
    id: 'card8'
  },
  {
    title: 'UI/UX Project',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    img: banner9,
    id: 'card9'
  }
];

const Portfolio = () => {
  const [card, setCard] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = createRef();

  const handleRenderCard = i => {
    setCard(projects[i]);
    handleOpen();
  };

  return (
    <Box
      component='section'
      sx={{
        backgroundColor: 'palegoldenrod',
        borderRadius: 5
      }}>
      <Box
        sx={{
          paddingInline: {
            xs: 2,
            sm: 5,
            md: 7.5
          }
        }}>
        <Box py={6}>
          <Typography
            variant='h3'
            component='h2'
            fontWeight='800'
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: {
                xs: 5,
                md: 0
              }
            }}>
            Portfolio
            <Box
              component='span'
              sx={{
                background:
                  'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                height: 2,
                width: '11rem',
                marginLeft: '1.5rem',
                display: {
                  xs: 'none',
                  sm: 'inline'
                }
              }}></Box>
          </Typography>
          <Stack
            direction='row'
            component='ul'
            flexWrap='wrap'
            m={0}
            p={0}
            mt={3.5}
            sx={{
              justifyContent: {
                xs: 'flex-start',
                sm: 'flex-end'
              }
            }}>
            {navList.map(item => (
              <Box
                key={item}
                component='li'
                fontWeight='700'
                color='gray'
                sx={{
                  p: 0,
                  listStyle: 'none',
                  mx: {
                    sm: 2
                  },
                  marginRight: {
                    xs: 2
                  }
                }}>
                {item}
              </Box>
            ))}
          </Stack>
        </Box>

        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {itemData.map(({ image, title, subtitle, color }, i) => (
            <Box key={i} p={3} sx={{ backgroundColor: color, borderRadius: 4 }}>
              <img
                src={image}
                alt=''
                style={{ borderRadius: 8, display: 'block', width: '100%' }}
                onClick={() => handleRenderCard(i)}
              />
              <Typography variant='body1' component='h3' pt={2.5}>
                {title}
              </Typography>
              <Typography
                variant='h5'
                component='h4'
                fontWeight='700'
                mt={1}
                onClick={() => handleRenderCard(i)}>
                {subtitle}
              </Typography>
            </Box>
          ))}
        </Masonry>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <PortfolioModalCard {...card} ref={ref} />
      </Modal>
      <Footer backgroundColor='white' borderRadius={20} />
    </Box>
  );
};

export default Portfolio;
