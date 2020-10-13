import React, { Component } from 'react';
import { Layout, Drawer, Menu, Breadcrumb,Row,Col,Typography,Form,Input} from 'antd';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class About extends Component {
    state = {  }

    async onFinish (values) {
        console.log(values);
        const url = 'https://bsa-web.herokuapp.com/store_email';
        const response = await fetch(url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "email":values.email
        }),
        });

        const emailResponse = await response.json();
      };

       gotoLink (ele){
        let offsetTop  = document.getElementById(ele).offsetTop;
        window.scrollTo({
            top: offsetTop-100,
            behavior: "smooth"
        });
    }
    state = {
      current: 'mail',
      visible: false
    }
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  onClose = () => {
      this.setState({
        visible: false,
      });
    };
    render() {
      return (
        <Layout className="layout">
          <Header className="header-bar">
            <div className="header-bar-logo">
              <Title className="header-bar-title" level={2}> Byte Size Arxiv </Title>
            </div>
            <div className="header-bar-menu">
              <Button className="home-button" size='large' href='/'> Home </Button>
              <Button className="bsa-button" size='large' href = '/B.S.A.'> B.S.A. </Button>
              <Button
                className="newsletter-button"
                size='large'
                onClick={() => this.gotoLink('news')}
                type='secondary'
              >
               Newsletter
              </Button>
             </div>
          </Header>
          <div style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', color:'#FAEEDC', textAlign:'left',float:'middle'}}>
            <Content style={{color:'#323030', backgroundColor:'white', padding: '0 50px' ,margin:'60px 0', marginLeft:'5em', marginRight:'5em'}}>
                <div className="summary">
                  <div className="summary-content">
                     <Title className="summary-heading" level={1}>Welcome to Byte Size Arxiv</Title>
                     <h3 className="summary-text">
                       We are on a mission to make it easy for you to stay up to date with cutting edge research being shared on Arxiv.org.
                     </h3>
                     <h3 className="get-started-text">
                      To get started, click the button below and select a category to browse Byte-Size summaries of brand new publications; made daily using Machine Learning.
                     </h3>
                      <div className="get-started-button">
                        <Button variant='outlined' href='/B.S.A.'> Try Byte Size Arxiv </Button>
                      </div>
                  </div>
                  <div className="summary-image">
                    <img src={require('../assets/BSA_Logo.png')}/>
                  </div>
                </div>
                <Row>
                    <Col span={24} className="building-bsa-heading">
                      <Title level={1}> Building B.S.A. </Title>
                    </Col>
                  </Row>
                <div className="building-bsa-content">
                  <div className="building-bsa-image">
                    <img src={require('../assets/BSA.gif')}/>
                  </div>
                  <div className="building-bsa-text">
                    <h3>
                      Everyday there are hundreds of peer-reviewed academic papers filled with cutting edge research being uploaded to Cornell's Arxiv.org. Byte Size Arxiv takes the articles as they are uploaded and isolates three key sentences in the abstract for a quickly digestible summary.
                      This is done using term frequency–inverse document frequency (TF-IDF), a machine learning model.
                    </h3>
                    <h3>
                      The model creates a score for each word (ignoring stopwords). If a given word appears frequently in the abstract it’s score goes up. However, if the word is also common amongst other articles, the score goes down.
                      The words with the highest scores are the most import words unique to the article in question!
                    </h3>
                    <h3>
                      Our goal is to spread this valuable knowledge by sharing key themes at a glance. Please reach out with any questions, concerns or opportunities. We would love to chat!
                    </h3>
                  </div>
                </div>
                <Row>
                    <Col span={24} style={{textAlign:'center', paddingTop:'2em'}}>
                   <Title level={1} style={{color:'black', paddingBottom:'1em'}}>
                    About the Founders
                </Title>
                        </Col>
                  </Row>
             <div className="founders">
               <div className="duffy">
                 <div className="duffy-image">
                   <img src={require('../assets/duffy.jpg')}/>
                 </div>
                 <div className="duffy-text-content">
                   <h1>Alex Duffy</h1>
                   <h4>Hi, I'm Alex! I currently work at EY as a Data and Analytics Consultant and am based out of Los Angeles, CA. Prior to EY, I've been lucky to have spent time at Amazon Robotics, Hasbro, ENSEEIHT in France, and MathTree as an engineer, designer, researcher, and instructor.</h4>
                   <h4>Ambiguous problems excite me - I'm curious about building for technical progress in society, particularly how to improve our approach to education.Education is especially important as it is a required tool for chasing dreams.</h4>
                   <h4>Alex received his B.S. in Electrical and Computer Engineering from Northeastern University.</h4>
                   <h4>Get in touch: alx.dfy@gmail.com</h4>
                 </div>
               </div>
               <div className="neeraj">
                 <div className="neeraj-image">
                   <img height='300px' width='' src={require('../assets/neeraj.JPG')}/>
                 </div>
                 <div className="neeraj-text-content">
                  <h1>Neeraj Sudhakar</h1>
                  <h4>Hi, I'm Neeraj Sudhakar! Over the past few years I have had the opportunity to work at Kumon,Wealth Planning Asset Management, Vertex Pharmaceuticals and Mersana Therapeutics as a tutor, quantitative analyst, researcher and process optimization engineer.</h4>
                  <h4>Analytical problem solving while leveraging the power of computing and Machine Learning is of special interest to me. I hope to continute this passion in the financial services industry to deliver unique, timely solutions.</h4>
                  <h4>Neeraj is currently in his final year as a combined BS Chemical Engineering/MS Engineering Management candidate. </h4>
                  <h4>Get in touch: sudhakarneeraj@gmail.com</h4>
                 </div>
               </div>
               <div className="abdullah">
                 <div className="abdullah-image">
                   <img height='300px' width='' src={require('../assets/abdullah.PNG')}/>
                 </div>
                 <div className="abdullah-text-content">
                  <h1>Abdullah Chaudhry</h1>
                  <h4>Special thanks to: Abdullah for helping bring the vision to life by doing the preliminary web development you can find his portfolio here.</h4>
                  
                  <h4>Get in touch: AbdullahAfzal2121@gmail.com
                    <br/>
                    Whatsapp: +923457772878
                  </h4>
                  <a href='https://www.fiverr.com/dextersol/do-django-python-react-javascript-projects-and-programs' target='blank'>
                <Button classname ="abdullah-button"
                type='primary'
              >
               Portfolio
              </Button>
              </a>
                 </div>
               </div>
             </div>
          </Content>
        </div>

          <Footer id='news' style={{backgroundColor:'black', textAlign: 'left' }}>
        <Title level={3}>Interested in a Weekly Digest?</Title>
              Sign up for our Waitlist
        <Form name='myform' onFinish={this.onFinish}>
        <Form.Item name='email'>
        <Input

        style={{margin: '0 auto',width:'200px'}}
        placeholder="Enter Email to be Notified of Newsletter" />

        </Form.Item>
        <Button
        type="primary"
        htmlType="submit">
        Submit
      </Button>
        </Form>
        </Footer>
    </Layout>
       );
    }
}

export default About;
