import { Card, Button, Row, Col } from "antd";
import { Link } from 'react-router-dom';

const Home = () => {
  const renderNewItemButton = () => (
    <Link to={'create'}>
      <Button type="primary">New Task</Button>
    </Link>
  );

  return (
    <div>
      <Card title={"Home"} style={{ margin: 20 }} extra={renderNewItemButton()}>
      <img src="https://media.licdn.com/dms/image/C4D1BAQEf4aE12hb2nQ/company-background_10000/0/1650011816442?e=1687564800&v=beta&t=VpnhRABiocc2cYUMpysMAoOdyooIm9InpxXYq3c2jt4" alt="Top Image" style={{ width: '100%', marginBottom: 16 }} />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card>
              <img src="https://media.licdn.com/dms/image/D4D22AQGQXU2GGzMqdg/feedshare-shrink_800/0/1683007738280?e=1689811200&v=beta&t=9rheR0ftU7xkfbeB3806SMa-MFB13yOLUJG6NqccfEE" alt="Image 1" style={{ width: '100%' }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <img src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/10/tes_gen_blog_code7.jpg" alt="Image 2" style={{ width: '100%' }} />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
