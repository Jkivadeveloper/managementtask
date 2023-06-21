import { Layout, Image } from "antd";
import SideMenu from '../src/components/SideMenu';
import AppRoutes from "./components/AppRoutes";

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://media.licdn.com/dms/image/C4D1BAQEf4aE12hb2nQ/company-background_10000/0/1650011816442?e=1687564800&v=beta&t=VpnhRABiocc2cYUMpysMAoOdyooIm9InpxXYq3c2jt4"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Task Management ©2023
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
