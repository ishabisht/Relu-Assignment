import React, { useState } from 'react'
import "./style.css"
import HeaderSidebar from '../headerSidebar/HeaderSidebar'
import { images } from '../../utils/imagepath';
import { imageData, users, posts, productData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faEllipsisVertical, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [view, setView] = useState('artist');
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="bg-[#f5f5f5] h-screen  flex flex-col">
      {/* Header Sidebar */}
      <HeaderSidebar activeMenu="Home" />
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 ml-[20%] px-12  overflow-y-scroll no-scrollbar mt-8">
          {posts.map((post, index) => {
            const user = users.find((user) => user.id === post.userId);

            return (
              <div key={index} className="bg-white shadow-md rounded-md p-6 mb-4">
                {/* Profile Section */}
                <div className="flex items-center mb-4 ml-16">
                  <img
                    src={images.dp[user.dpIndex]}
                    alt={user.name}
                    className="w-12 h-12 -full mr-4"
                  />
                  <div>
                    <p className="font-bold text-xl">{user.name}</p>
                    <p className="text-gray-500 text-lg">{user.id}</p>
                  </div>
                  <div className="ml-auto mr-16">
                    <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-600 text-3xl cursor-pointer" />
                  </div>
                </div>

                {/* Post Summary */}
                <p className="text-gray-600 text-xl mb-6 ml-16 mr-16">
                  {post.summary}
                  <button className="text-red-500"> Read More..</button>
                </p>

                {/* Hero Image */}
                <div className="relative mb-8">
                  <div className="relative overflow-hidden rounded-md" style={{ height: '420px' }}>
                    <img
                      src={images.hero[post.heroIndex]}
                      alt={post.title}
                      className="absolute top-0 left-0 w-full h-full object-contain scale-x-125"
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="absolute top-2 right-24 text-white text-2xl cursor-pointer"
                  />
                </div>
                <div className="border-t border-gray-300 mb-8"></div>

                {/* Like, Comment, Share Section */}
                <div className="flex items-center justify-between text-3xl ml-16 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faHeart} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faComment} />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faShare} />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Product Slider Below Post */}
          <div className="mt-6">
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {productData.map((product, idx) => (
                <div key={idx} className="rounded-md  flex-shrink-0 relative">
                  <img
                    src={images.pics[product.imageIndex]}
                    alt={product.title}
                    className="w-full h-52 object-cover rounded-md"
                  />
                  <div className="mt-3 ">
                    <p className="text-xl font-semibold">{product.title}</p>
                    <p className="text-black font-bold text-2xl mt-2 mb-4">{product.price}</p>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 mb-4 text-xl">
                      {[...Array(5)].map((_, starIdx) => (
                        <FontAwesomeIcon
                          key={starIdx}
                          icon={faStar}
                          className={`text-yellow-500 ${starIdx < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>


        {/* Picture Bar */}
        <div className="absolute top-[120px] right-56 flex gap-6 justify-center text-xl font-semibold mt-8">
          <p
            className={`cursor-pointer transition duration-300 ${view === 'artist' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => handleViewChange('artist')}
          >
            Artist
          </p>
          <p
            className={`cursor-pointer transition duration-300 ${view === 'photograph' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => handleViewChange('photograph')}
          >
            Photograph
          </p>
        </div>
        <aside className="w-1/5  flex flex-col overflow-y-scroll no-scrollbar h-[90%]  mt-20">
          <div className="space-y-6 overflow-y-scroll no-scrollbar pr-4">
            {view === 'artist' && (
              images.pics.map((side, index) => (
                <div key={index} className="relative bg-gray-200 h-44 rounded-md ">
                  {/* Main Picture */}
                  <img
                    src={side}
                    alt={`Side${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex flex-col ml-24 mt-20 text-white">
                    <div className="bg-black bg-opacity-5 p-2 rounded-md">
                      <p
                        className="font-Gilroy text-3xl font-semibold"
                        style={{ fontFamily: 'Gilroy', fontWeight: '600' }}
                      >
                        {imageData[index].name}
                      </p>
                      <p
                        className="font-Gilroy text-xl font-semibold mt-1"
                        style={{ fontFamily: 'Gilroy' }}
                      >
                        {imageData[index].id}
                      </p>
                    </div>
                  </div>
                  {/* Small Image with Active Dot */}
                  <div className="absolute bottom-5 left-4">
                    <div className="relative w-16 h-16 bg-white border-2 border-gray-300">
                      <img
                        src={images.profile[index]}
                        alt={`Profile ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-[-4px] right-[-4px] w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {view === 'photograph' && (
              images.nv.map((nv, index) => (
                <div key={index} className="relative bg-gray-200 h-44 rounded-md">
                  {/* Main Picture */}
                  <img
                    src={nv}
                    alt={`Side${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <footer className="h-16 bg-gray-100 flex items-center justify-center shadow-md mt-3">
            <p className="text-sm text-gray-500 text-center">
              2024 © Picture Bar <br /> Developed by Isha
            </p>
          </footer>
        </aside>
      </div>
    </div>
  );
}

export default Home