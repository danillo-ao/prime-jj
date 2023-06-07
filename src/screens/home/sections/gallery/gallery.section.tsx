import React from 'react';
import { X, ChevronRight, ChevronLeft } from 'react-feather';

import { PageWrapper } from '@components/page';

import * as Styles from './gallery.styles';
import WaveLinearTop from '@components/waves/linear-top.comp';
import WaveLinearBottom from '@components/waves/linear-bottom.comp';

const gallery = [
  'https://s3.amazonaws.com/cdn.danilloliveiradev/350221862_637364385081619_8488584183881472055_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/348676005_784236626437786_7624702124423275287_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/336047490_173199108838901_6652523512824320558_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/336968207_1391733488325490_28048301061620506_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/339336504_1186565168723827_5922876118402305912_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/339818556_1204157907128247_956177938504694739_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/339867662_894950711614088_5704558850361397165_n.jpg',
  'https://s3.amazonaws.com/cdn.danilloliveiradev/344597479_621750366671284_2505675668916166522_n.jpg',
];

const GallerySection = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [currentImage, setCurrentImage] = React.useState<number>(0);

  const close = () => {
    setVisible(false);
  };

  const handleImage = (amount: number) => {
    const next = currentImage + amount;
    if (next > gallery.length - 1) {
      // first image
      setCurrentImage(0);
    } else if (next < 0) {
      // last image
      setCurrentImage(gallery.length - 1);
    } else {
      setCurrentImage(next);
    }
  };

  return (
    <>
      <WaveLinearTop />
      <Styles.GallerySection id="gallery">
        <PageWrapper>
          <Styles.GalleryContent>
            {/**/}
            <Styles.GalleryGrid>
              {gallery.map((url, index) => (
                <Styles.GalleryImage
                  key={url}
                  src={url}
                  onClick={() => {
                    setCurrentImage(index);
                    setVisible(true);
                  }}
                />
              ))}
            </Styles.GalleryGrid>
            {/**/}
          </Styles.GalleryContent>
        </PageWrapper>
      </Styles.GallerySection>
      <WaveLinearBottom />

      <Styles.GalleryFullScreen visible={visible}>
        <Styles.GalleryFullBackdrop onClick={close} />
        <PageWrapper>
          <Styles.GalleryFullBackdrop onClick={close} />

          <Styles.GalleryFullImageContent>
            <Styles.GalleryFullImageContentBody>
              <Styles.GalleryFullImageContentBodyAction>
                <Styles.GalleryFullImageContentBodyButton
                  onClick={() => handleImage(-1)}
                >
                  <ChevronLeft />
                </Styles.GalleryFullImageContentBodyButton>
              </Styles.GalleryFullImageContentBodyAction>

              <Styles.GalleryFullImageContentBodyImageContent>
                <Styles.GalleryFullImageCloseButton onClick={close}>
                  <X />
                </Styles.GalleryFullImageCloseButton>

                <Styles.GalleryFullImageContentBodyImage
                  src={gallery[currentImage]}
                />
              </Styles.GalleryFullImageContentBodyImageContent>

              <Styles.GalleryFullImageContentBodyAction>
                <Styles.GalleryFullImageContentBodyButton
                  onClick={() => handleImage(1)}
                >
                  <ChevronRight />
                </Styles.GalleryFullImageContentBodyButton>
              </Styles.GalleryFullImageContentBodyAction>
            </Styles.GalleryFullImageContentBody>
          </Styles.GalleryFullImageContent>
        </PageWrapper>
      </Styles.GalleryFullScreen>
    </>
  );
};

export { GallerySection };
