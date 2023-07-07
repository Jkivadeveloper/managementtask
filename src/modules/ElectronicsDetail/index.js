import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useCartContext } from '../../components/CartContext';
import Cart from '../Cart';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const ElectronicsDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const { addToCart } = useCartContext(); // Get the addToCart function from the CartContext
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      const db = getFirestore();
      const itemRef = doc(db, 'electronics', id);
      const itemSnapshot = await getDoc(itemRef);

      if (itemSnapshot.exists()) {
        setItem({ itemID: id, ...itemSnapshot.data() });
      } else {
        setItem(null);
      }
    };

    getItem();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleBack = () => {
    // Navigate back to Orders
    navigate("/electronics");
  };

  const handleAddToCart = () => {
    if (item) {
      const cartItem = {
        id: item.itemID,
        image: item.images[0],
        name: item.name,
        price: item.price,
        quantity: 1, // Set initial quantity to 1
      };
      addToCart(cartItem); // Add the item to the cart using the addToCart function from CartContext
      alert('Item added to cart');
    }
  };

  return (
    <>
      <Card title={`Electronics Details`} style={{ margin: 20 }}>
        {item ? (
          <Row gutter={[16, 16]}>
           <Button type="text" icon={<ArrowLeftOutlined />} onClick={handleBack} />

            <Col xs={24} md={12} lg={8}>
              <img src={selectedImage || item.images[0]} alt="Product" style={{ width: '100%' }} />
              <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
                {item.images.map((image, index) => (
                  <Col span={6} key={index}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      style={{ width: '100%', cursor: 'pointer' }}
                      onClick={() => handleImageClick(image)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={24} md={12} lg={16}>
              <div>
                <strong>Name: </strong>
                {item.name}
              </div>
              <div>
                <strong>Price: </strong>
                {`Ksh. ${item.price}`}
              </div>
              <div>
                <strong>Description: </strong>
                {item.description}
              </div>
              <button onClick={handleAddToCart} style={{ marginTop: 16 }}>
                Add to Cart
              </button>
            </Col>
          </Row>
        ) : (
          <div>No product found.</div>
        )}
      </Card>
      <Cart /> {/* Display the Cart component below the TvsDetail component */}
    </>
  );
};

export default ElectronicsDetail;
