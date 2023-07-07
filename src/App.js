import React from 'react';
import { Layout, Image, Row, Col } from 'antd';
import AppRoutes from './components/AppRoutes';
import { Provider } from 'react-redux';
import store from './store/store';

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ overflow: 'auto' }}>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"
                  alt="Email"
                  width={50}
                  height={50}
                />
                <p>Email: chloemallc@gmail.com</p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Image
                  src="https://previews.123rf.com/images/jovanas/jovanas1912/jovanas191200071/135280299-contact-us-icon-call-contact-us-contacts-email-message.jpg"
                  alt="Contact"
                  width={50}
                  height={50}
                />
                <p>Phone: +254702751701</p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <a href="https://img.freepik.com/premium-vector/twitter-logo-social-media-blue-icon-twitter-brand-logotype-twitter-app-button-vector-editorial_754658-279.jpg?w=2000">
                  <Image
                    src="https://img.freepik.com/premium-vector/twitter-logo-social-media-blue-icon-twitter-brand-logotype-twitter-app-button-vector-editorial_754658-279.jpg?w=2000"
                    alt="Twitter"
                    width={80}
                    height={80}
                  />
                </a>
                <a href="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                    alt="Instagram"
                    width={80}
                    height={80}
                  />
                </a>
                <a href="https://www.popsci.com/uploads/2023/03/07/why-you-should-set-up-whatsapp-web.jpg?auto=webp">
                  <Image
                    src="https://www.popsci.com/uploads/2023/03/07/why-you-should-set-up-whatsapp-web.jpg?auto=webp"
                    alt="WhatsApp"
                    width={80}
                    height={80}
                  />
                </a>
                <a href="https://pbs.twimg.com/profile_images/1646955748444852231/XGehZ_9v_400x400.jpg">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1646955748444852231/XGehZ_9v_400x400.jpg"
                    alt="Facebook"
                    width={80}
                    height={80}
                  />
                </a>
                <a href="https://web.telegram.org/a/icon-192x192.png">
                  <Image
                    src="https://web.telegram.org/a/icon-192x192.png"
                    alt="Telegram"
                    width={80}
                   height={80}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <div>
            <h3>Market with us and earn Ksh 1000</h3>
            <p>For a product below Ksh 32000</p>
            <p>Apply on chloemallc@gmail.com</p>
          </div>
          <div>
            <h2>Return Policy for ChloeMall App and Website</h2>
            <h4>
              At ChloeMall, we are committed to providing a seamless shopping
              experience for our valued customers. We understand that sometimes
              a return may be necessary, and we have established the following
              return policy to ensure your satisfaction:
            </h4>
            <h4>
              Product Warranty:
            </h4>
            <p>
              All products sold on ChloeMall are backed by their respective
              manufacturer's warranty. The warranty duration may vary depending
              on the product. We encourage you to review the product listing or
              contact our customer support team to ascertain the specific
              warranty details for your purchase.
            </p>
            <h4>
              Returns Eligibility:
            </h4>
            <p>
              You may be eligible for a return if:
            </p>
            <ol>
              <li>The product you received is defective, damaged, or not as described.</li>
              <li>The return falls within the warranty period specified for the product.</li>
              <li>You can provide proof of purchase, such as an order confirmation or receipt.</li>
            </ol>
            <h4>
              Return Process:
            </h4>
            <p>
              To initiate a return, please follow these steps:
            </p>
            <ol>
              <li>Contact our customer support team within [number of days] days from the date of delivery to notify us about your return request.</li>
              <li>Provide the necessary order details, including the order number, product name, and reason for the return.</li>
              <li>Our customer support team will guide you through the return process, providing a return address or arranging for a pickup, if applicable.</li>
            </ol>
            <h4>
              Return Shipping:
            </h4>
            <p>
              Return shipping costs will be handled as follows:
            </p>
            <ul>
              <li>If the return is due to a manufacturing defect, damage, or an error on our part, ChloeMall will cover the return shipping costs.</li>
              <li>For all other returns, you will be responsible for the return shipping expenses.</li>
            </ul>
            <p>
              Please note that it is essential to return the product in its original packaging, including all accessories, manuals, and any other items provided with the product. We recommend using a trackable shipping method to ensure the safe return of the item.
            </p>
            <h4>
              Delivery Guarantee:
            </h4>
            <p>
              At ChloeMall, we prioritize prompt delivery of your orders. We strive to deliver all products within 24 hours from Monday to Saturday. In case of any unexpected delays, we will promptly communicate with you to provide updated delivery information.
            </p>
            <p>
              If you have any further questions or require assistance with the return process, please don't hesitate to reach out to our customer support team. We are here to ensure your satisfaction and resolve any concerns you may have.
            </p>
            <p>
              Thank you for choosing ChloeMall as your trusted shopping destination. We appreciate your business and look forward to serving youagain</p>
          </div>
          <div>
            <h2>Return Policy for ChloeMall App and Website</h2>
            <h4>
              At ChloeMall, we are committed to providing a seamless shopping
              experience for our valued customers. We understand that sometimes
              a return may be necessary, and we have established the following
              return policy to ensure your satisfaction:
            </h4>
            <h4>Product Warranty:</h4>
            <p>
              All products sold on ChloeMall are backed by their respective
              manufacturer's warranty. The warranty duration may vary depending
              on the product. We encourage you to review the product listing or
              contact our customer support team to ascertain the specific
              warranty details for your purchase.
            </p>
            <h4>Returns Eligibility:</h4>
            <p>
              You may be eligible for a return if:
            </p>
            <ul>
              <li>The product you received is defective, damaged, or not as described.</li>
              <li>The return falls within the warranty period specified for the product.</li>
              <li>You can provide proof of purchase, such as an order confirmation or receipt.</li>
            </ul>
            <h4>Return Process:</h4>
            <p>
              To initiate a return, please follow these steps:
            </p>
            <ol>
              <li>Contact our customer support team within [number of days] days from the date of delivery to notify us about your return request.</li>
              <li>Provide the necessary order details, including the order number, product name, and reason for the return.</li>
              <li>Our customer support team will guide you through the return process, providing a return address or arranging for a pickup, if applicable.</li>
            </ol>
            <h4>Return Shipping:</h4>
            <p>
              Return shipping costs will be handled as follows:
            </p>
            <ul>
              <li>If the return is due to a manufacturing defect, damage, or an error on our part, ChloeMall will cover the return shipping costs.</li>
              <li>For all other returns, you will be responsible for the return shipping expenses.</li>
            </ul>
            <p>
              Please note that it is essential to return the product in its original packaging, including all accessories, manuals, and any other items provided with the product. We recommend using a trackable shipping method to ensure the safe return of the item.
            </p>
            <h4>Delivery Guarantee:</h4>
            <p>
              At ChloeMall, we prioritize prompt delivery of your orders. We strive to deliver all products within 24 hours from Monday to Saturday. In case of any unexpected delays, we will promptly communicate with you to provide updated delivery information.
            </p>
            <p>
              If you have any further questions or require assistance with the return process, please don't hesitate to reach out to our customer support team. We are here to ensure your satisfaction and resolve any concerns you may have.
            </p>
            <p>
              Thank you for choosing ChloeMall as your trusted shopping destination. We appreciate your business and look forward to serving you again.
            </p>
          </div>
          <div>
            Chloemall ©2023
          </div>
        </Footer>
      </Layout>
    </Provider>
  );
}

export default App;