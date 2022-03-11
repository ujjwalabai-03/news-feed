import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import addIcon from '../assets/images/addIcon.svg';
import addIconWhite from '../assets/images/addIconWhite.svg';
import { fetchNews } from '../redux/actions/newsActions';
import { addCategory } from '../redux/actions/categoryActions';

const CategoriesSelection = (props) => {
  const { categoryList } = useSelector(state => state.category);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryList[0]);
  const [categoryDetails, setCatergoryDetails] = useState({
    name: '',
    url: ''
  });

  useEffect(() => {
    fetchNews()
     // eslint-disable-next-line
  }, [activeCategory])

  const fetchNews = () => {
    props.fetchNews(activeCategory)
  }
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submitForm = () => {
    toggleModal();
    props.addCategory(categoryDetails);
  }

  return (
    <div className='category-wrapper'>
      {categoryList?.map((category, i) => <span key={i} className={`${activeCategory === category ? 'active-item' : 'cs-items-list'}`} onClick={() => setActiveCategory(category)}>{category} {" "}</span>)}
      {categoryList.length !== 5 && <span id='add-icon-container' className='cs-items' onClick={() => toggleModal()}><img src={addIcon} alt='add-icon'></img>
      </span>}
      <div id="myModal" className={`${showModal ? 'show-modal' : 'modal'}`}>
        <div className="modal-content">
          <div className='add-category-header'>Add Category</div>
          <input className='add-category-details' type='text' name='name' placeholder='Category Name' onChange={(e) => setCatergoryDetails({ ...categoryDetails, [e.target.name]: e.target.value })} required=''></input>
          <input className='add-category-details' type='text' name='url' placeholder='API URL' onChange={(e) => setCatergoryDetails({ ...categoryDetails, [e.target.name]: e.target.value })} required=''></input>
          <button className='add-category-button' onClick={() => submitForm()}><img className='add-icon-white' src={addIconWhite} alt='add-icon'></img>
            <span className='add-button-text'>Add</span></button>
        </div>
      </div>
    </div>
  )
};

export default connect(null, { fetchNews, addCategory })(CategoriesSelection);