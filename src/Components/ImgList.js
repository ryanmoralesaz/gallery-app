import React from 'react';
import IMG from './IMG';
import NoImgs from './NoImgs';

const ImgList = props => {

  const results = props.data;
  let imgs;
  if (results.length) {
    imgs = results.map(img => <IMG url={img.images.fixed_height.url} key={img.id} />);
  } else {
    imgs = <NoImgs />
  }

  return(
    <ul className="gif-list">
      {imgs}
    </ul>
  );
}

export default ImgList;
