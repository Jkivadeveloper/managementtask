import { Form, Input, Button, Card, Checkbox } from "antd";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { TextArea } = Input;

const CreateTask = () => {
  const [userUID, setUserUID] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUID(user.uid);
      } else {
        setUserUID("");
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleFormSubmit = async () => {
    if (!userUID) {
      window.alert("Please sign in to save tasks.");
      return;
    }

    try {
      const db = getFirestore();
      const taskCollection = collection(db, "task");

      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString();

      const taskData = {
        title: form.getFieldValue("title"),
        description: form.getFieldValue("description"),
        userUID: userUID,
        completed: false,
        dates: [currentDate],
        time: currentTime,
      };

      await addDoc(taskCollection, taskData);

      form.resetFields();
      window.alert("Task Completed and marked!");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <Card title="New Task" style={{ margin: 20 }}>
      {userUID ? (
        <div>Signed-in User UID: {userUID}</div>
      ) : (
        <div>Please sign in to save tasks.</div>
      )}
      <Form
        form={form}
        layout="vertical"
        wrapperCol={{ span: 8 }}
        onFinish={handleFormSubmit}
      >
        <Form.Item label="Title" name="title" required>
          <Input placeholder="Enter Title" />
        </Form.Item>
        <Form.Item label="Description" name="description" required>
          <TextArea rows={4} placeholder="Enter description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!userUID}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item
          name="completed"
          valuePropName="checked"
          wrapperCol={{ offset: 8 }}
        >
          <Checkbox>Mark Assignment as Completed</Checkbox>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateTask;
