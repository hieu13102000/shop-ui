import { Breadcrumb, Col, Row } from 'antd'
import Card from '../../core/Card'
import style from './dashboard.module.scss'
import images from '../../assets/images';
import { CaretUpOutlined, CaretDownFilled, DashboardOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <Breadcrumb style={{ marginTop: 10 }}>
        <Breadcrumb.Item><DashboardOutlined /> {t('content.dashboard')}</Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <Card>
            <Row className={style['big-card']}>
              <Col span={24} className={style['big-card-title']}>
                Good Morning, dinhhieu!
              </Col>
              <Col span={24} className={style['big-card-description']}>
                Here’s what happening with your store today!
              </Col>
              <Col span={12} >
                <Row className={style['big-card-total']}>15,350.25</Row>
                <Row className={style['big-card-total-description']}>Today’s Visit</Row>
                <Row className={style['big-card-total']}>$10,360.66</Row>
                <Row className={style['big-card-total-description']}>Today’s total sales</Row>
              </Col>
              <Col span={12} className={style['img-dashboard']}>
                <img src={images.dashboard} alt="dashboard" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} className={style['small-card']}>
              <Card>
                <Row className={style['small-card-title']}>Order</Row>
                <Row className={style['small-card-total']}>32,350</Row>
                <Row>
                  <Col span={12} className={style['small-card-total1']}>9350</Col>
                  <Col span={12} className={style['small-card-total2']} style={{ color: '#4E97FD' }}>
                    <CaretUpOutlined /> 25.25%
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} className={style['small-card']}>
              <Card>
                <Row className={style['small-card-title']}>Sold Items</Row>
                <Row className={style['small-card-total']}>2,360</Row>
                <Row>
                  <Col span={12} className={style['small-card-total1']}>1350</Col>
                  <Col span={12} className={style['small-card-total2']} style={{ color: '#E94560' }}>
                    <CaretDownFilled /> 2.65%
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} className={style['small-card']}>
              <Card>
                <Row className={style['small-card-title']}>Gross Sale</Row>
                <Row className={style['small-card-total']}>$12,460.25</Row>
                <Row>
                  <Col span={12} className={style['small-card-total1']}>11350</Col>
                  <Col span={12} className={style['small-card-total2']} style={{ color: 'rgb(51, 208, 103)' }}>
                    <CaretUpOutlined /> 10.25
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} className={style['small-card']}>
              <Card>
                <Row className={style['small-card-title']}>Total Shipping Cost</Row>
                <Row className={style['small-card-total']}>$6,240</Row>
                <Row>
                  <Col span={12} className={style['small-card-total1']}>4350</Col>
                  <Col span={12} className={style['small-card-total2']} style={{ color: '#E94560' }}>
                    <CaretDownFilled /> 13.15%
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <Col xs={24} sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} className={style['medium-card']}>
              <Card>
                <Row className={style['medium-card-title']}>Weekly Sales</Row>
                <Row>
                  <Col span={12} className={style['medium-card-total1']}>$10,240.00</Col>
                  <Col span={12} className={style['medium-card-chart']} style={{ color: '#E94560' }}>
                    <CaretDownFilled /> 13.15%
                  </Col>
                  <Col span={24} className={style['medium-card-total2']} style={{ color: '#4E97FD' }}>
                    <CaretUpOutlined /> 13.15%
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Card style={{ height: 118 }}>Card content</Card>
            </Col>
          </Row>
        </Col> */}
        {/* <Col xs={24} sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Card style={{ height: 118 }}>Card content</Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Card style={{ height: 118 }}>Card content</Card>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </>
  )
}
