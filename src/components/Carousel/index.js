import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, Descritpion } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescription = category.descricao;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor }}>
            {categoryTitle}
          </Title>
          <Descritpion>
            {categoryDescription}
          </Descritpion>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
  category: {
    cor: '#ED0000',
    descricao: '',
  },
};

Carousel.propTypes = {
  category: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string,
    descricao: PropTypes.string,
  }),
  ignoreFirstVideo: PropTypes.bool,
};

export default Carousel;
