import { Card, Divider, List, Button, message } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";

const DetailedTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const db = getFirestore();
      const taskDoc = doc(db, "task", id); 
      const taskSnapshot = await getDoc(taskDoc);

      if (taskSnapshot.exists()) {
        setTask({ taskID: taskSnapshot.id, ...taskSnapshot.data() });
      } else {
        setTask(null);
      }
    };

    fetchTask();
  }, [id]);

  const handleDeleteTask = async () => {
    try {
      const db = getFirestore();
      const taskDoc = doc(db, "task", id); 
      await deleteDoc(taskDoc);
      message.success("Task deleted successfully");
      navigate("/tasks"); 
    } catch (error) {
      console.error("Error deleting task:", error);
      message.error("Failed to delete the task");
    }
  };

  return (
    <Card title={`Task ${id}`} style={{ margin: 20 }}>
      {task ? (
        <>
          <Divider />
          <List
            dataSource={[task]}
            renderItem={(taskItem) => (
              <List.Item>
                <div style={{ fontWeight: "bold" }}>{taskItem.title}</div>
                <div>{taskItem.description}</div>
              </List.Item>
            )}
          />
          <Divider />
          <div style={styles.buttonsContainer}>
            <Button
              block
              type="danger"
              size="large"
              style={styles.button}
              onClick={handleDeleteTask}
            >
              Delete Task
            </Button>
          </div>
        </>
      ) : (
        <div>Loading task...</div>
      )}
    </Card>
  );
};

const styles = {
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "red",
  },
};

export default DetailedTask;
