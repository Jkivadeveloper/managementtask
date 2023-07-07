import React, { useState } from "react";
import { Form, Input, Button, Card, Checkbox, Select, Row, Col, message } from "antd";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Option } = Select;

const CreateItem = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    // Navigate back to Orders
    navigate("/orders");
  };

  const handleAddItem = async (values) => {
    try {
      setLoading(true);
      const firestore = getFirestore();
      const { category, image, image1, image2, image3, name, price, description } = values;

      let collectionName;

      switch (category) {
        case "Tvs":
          collectionName = "tvs";
          break;
        case "Home":
          collectionName = "products";
          break;
        case "Laptop":
          collectionName = "laptops";
          break;
        case "Electronics":
          collectionName = "electronics";
          break;
        case "Phones":
          collectionName = "phones";
          break;
        case "Fashion":
          collectionName = "fashions";
          break;
        default:
          break;
      }

      if (collectionName) {
        await addDoc(collection(firestore, collectionName), {
          image,
          images: [image1, image2, image3],
          name,
          price,
          description,
        });
        message.success("Item added successfully!");
        form.resetFields();
      } else {
        message.error("Invalid category!");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      message.error("Failed to add item!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card title="New Item" style={{ margin: 20 }}>
          <Button type="text" icon={<ArrowLeftOutlined />} onClick={handleBack} />

          <Form form={form} onFinish={handleAddItem}>
            <Form.Item name="category" label="Category" rules={[{ required: true, message: "Please select a category" }]}>
              <Select placeholder="Select a category">
                <Option value="Laptop">Laptop</Option>
                <Option value="Tvs">TVs</Option>
                <Option value="Home">Home</Option>
                <Option value="Phones">Phones</Option>
                <Option value="Electronics">Electronics</Option>
                <Option value="Fashion">Fashion</Option>
              </Select>
            </Form.Item>

            <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Please provide an image URL" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="image1" label="Image 1 URL" rules={[{ required: true, message: "Please provide image 1 URL" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="image2" label="Image 2 URL" rules={[{ required: true, message: "Please provide image 2 URL" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="image3" label="Image 3 URL" rules={[{ required: true, message: "Please provide image 3 URL" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please provide a name" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="price" label="Price" rules={[{ required: true, message: "Please provide a price" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please provide a description" }]}>
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Add Item
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateItem;
