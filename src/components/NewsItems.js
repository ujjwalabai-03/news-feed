import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const NewsItems = () => {
  const { searchItem } = useSelector(state => state.category);
  const { newsList } = useSelector(state => state.news);
  return (
    <>
      {newsList?.filter(news=>news.title.toLowerCase().includes(searchItem.toLowerCase())).map((news, i) => (
        <div className='news-item-main-wrapper' key={i}>
          <div className='news-item-left-wrapper'>
            <div className='news-item-header'>{news?.title}</div>
            <div className='news-item-author'>{news?.author} {moment(news?.publishedAt).format('YYYY-MM-DD h:mm a')}</div>
            <div className='news-item-sub-text'>{news?.description}</div>
          </div>
          <div className='news-item-right-wrapper'>
            <img className='news-item-image' src={news?.urlToImage} alt='url-img'></img>
          </div>
        </div>
      ))}
    </>
  )
}

export default NewsItems;
