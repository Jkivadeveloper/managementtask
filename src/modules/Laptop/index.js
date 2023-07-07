// Laptop.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Pagination, Input, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { ShoppingCartOutlined } from '@material-ui/icons';
import ReactPlayer from 'react-player';
import { useCartContext } from '../../components/CartContext';

const videos = [
  {
    url: 'https://youtu.be/l3RyWY_PXTw', // Replace with your video URL
    id: 1,
  },
  {
    url: 'https://youtu.be/rOjdpbBEc-E',
    id: 2,
  },
  {
    url: 'https://youtube.com/shorts/9FRYld9PCfI?feature=share',
    id: 3,
  },
  {
    url: 'https://youtu.be/dCvvugSjnZ4',
    id: 4,
  },
  {
    url: 'https://youtu.be/qtl5Onk8k3c',
    id: 5,
  },
  // Add more video URLs here
];

const videoDuration = 28000; // Duration for each video in milliseconds

const Laptop = () => {
  const navigate = useNavigate();
  const [laptops, setLaptops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const pageSize = 16;

  const { cartItems } = useCartContext(); // Access cartItems from the CartContext

  useEffect(() => {
    const db = getFirestore();
    const laptopsCollection = collection(db, 'laptops');

    const unsubscribe = onSnapshot(laptopsCollection, (snapshot) => {
      const updatedLaptops = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLaptops(updatedLaptops);
    });

    return () => unsubscribe();
  }, []);

  const handleNavigateToLaptopDetail = (laptopId) => {
    navigate(`/laptop/${laptopId}`);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentLaptops = laptops.slice(startIndex, endIndex);

  const filteredLaptops = laptops.filter((laptop) =>
    laptop.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLaptops.length / pageSize);
  const currentPageLaptops =
    currentPage === 1 ? filteredLaptops.slice(0, pageSize) : filteredLaptops.slice(startIndex, endIndex);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const playNextVideo = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    timeout = setTimeout(playNextVideo, videoDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentVideoIndex]);

  return (
    <Card
      title="Laptop"
      style={{ margin: 20 }}
      extra={
        <React.Fragment>
          <Badge count={cartItems.length}>
            <ShoppingCartOutlined
              style={{ marginLeft: '8px', fontSize: '44px', color: 'orangered' }}
              onClick={handleCartClick}
            />
          </Badge>
        </React.Fragment>
      }
    >
      <div style={{ position: 'relative', paddingBottom: '56.25%', marginBottom: 26 }}>
        <ReactPlayer
          url={videos[currentVideoIndex].url}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls={false}
          playing
        />
      </div>

      <Input.Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by laptop name"
        style={{ width: '100%', height: 40, marginBottom: 16 }}
      />

      <Row gutter={[16, 16]} justify="center">
        {currentPageLaptops.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={item.id}>
            <Card
              hoverable
              onClick={() => handleNavigateToLaptopDetail(item.id)}
              cover={
                <img
                  src={item.image}
                  alt="Laptop"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              }
              style={{ marginBottom: 16 }}
            >
              <Card.Meta title={item.name} description={`Price: Ksh. ${item.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredLaptops.length}
        onChange={handlePageChange}
        style={{ marginTop: 20, textAlign: 'center' }}
        showSizeChanger={false}
        showQuickJumper={false}
        hideOnSinglePage={true}
        defaultPageSize={pageSize}
        defaultCurrent={1}
      />
    </Card>
  );
};

export default Laptop;
