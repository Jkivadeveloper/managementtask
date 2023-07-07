import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Tag, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const renderOrderStatus = (status) => {
    if (status === 'Delivered') {
      return <Tag color="green">{status}</Tag>;
    }
    return null;
  };

  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    const unsubscribe = onSnapshot(ordersCollection, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const filteredData = orders.filter((order) =>
      order.address.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOrders(filteredData);
  }, [orders, searchText]);

  const handleOrderClick = (orderId) => {
    navigate(`/orderdetail/${orderId}`);
  };

  const markOrderAsDelivered = async (orderId) => {
    try {
      const db = getFirestore();
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status: 'Delivered' });
      console.log('Order marked as delivered:', orderId);
    } catch (error) {
      console.log('Error marking order as delivered:', error);
    }
  };

  const handleCreateItemClick = () => {
    navigate('/createitem');
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (orderId) => (
        <a onClick={() => handleOrderClick(orderId)}>{orderId}</a>
      ),
    },
    {
      title: 'Customer Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Total Amount',
      dataIndex: 'total',
      key: 'total',
      render: (amount) => `Ksh. ${amount}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <div>
          {renderOrderStatus(status)}
          {status !== 'Delivered' && (
            <Button
              size="small"
              onClick={() => markOrderAsDelivered(record.id)}
            >
              Mark as Delivered
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Card
      title="Orders"
      style={{ margin: 20, overflowX: 'auto', maxHeight: '70vh' }}
    >
        <Card><Button type="primary" onClick={handleCreateItemClick} style={{ marginTop: 16 }}>
          Create Item
        </Button>
        </Card>
         
      <Input.Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by address"
style={{ width: '100%', marginBottom: 16 }}
      />
      <Table
        dataSource={filteredOrders}
        columns={columns}
        rowKey="id"
        pagination={{ responsive: true }}
      />
    </Card>
  );
};

export default Orders;
