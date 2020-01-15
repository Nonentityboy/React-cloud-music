import React from 'react';
import Slider from '../../components/slider';

function Recommend () {

  //mock 数据
  const bannerList = [1,2,3].map (item => {
    return { 
      imageUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1830996896,1790652234&fm=26&gp=0.jpg",
      imageUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893798113,2002765214&fm=26&gp=0.jpg"
    }
  });

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo (Recommend);