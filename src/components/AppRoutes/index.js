import DetailedTask from "../../modules/DetailedTask";
import Home from "../../modules/Home";
import Login from "../../modules/Login";
import { Routes, Route } from "react-router-dom";
import MyTasks from "../../modules/MyTasks";
import CreateTask from "../../modules/CreateTask";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyTasks />} />
      <Route path="task/:id" element={<DetailedTask />} />
      <Route path="menu" element={<Home />} />
      <Route path="menu/create" element={<CreateTask />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
