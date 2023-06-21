import { Card, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const MyTasks = () => {
  const navigate = useNavigate();
  const [userUID, setUserUID] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const tasksCollection = collection(db, 'task');
    const userUIDQuery = query(tasksCollection, where('userUID', '==', userUID));

    const unsubscribe = onSnapshot(userUIDQuery, (snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => ({
        taskID: doc.id,
        ...doc.data(),
      }));
      setTasks(updatedTasks);
    });

    return () => unsubscribe(); 
  }, [userUID]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUID(user.uid);
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleNavigateToDetailedTask = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  const tableColumns = [
    {
      title: 'Task ID',
      dataIndex: 'taskID',
      key: 'taskID',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
  ];

  return (
    <Card title={`User UID: ${userUID}`} style={{ margin: 20 }}>
      <Table
        dataSource={tasks}
        columns={tableColumns}
        rowKey="taskID"
        onRow={(taskItem) => ({
          onClick: () => handleNavigateToDetailedTask(taskItem.taskID),
        })}
      />
    </Card>
  );
};

export default MyTasks;
