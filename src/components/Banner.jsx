import { Card, Typography, Flex, Button } from 'antd'
import React from 'react'

function Banner() {
    return (
        <div >
            <div className='hover:-translate-y-2 duration-300'>


                <Card style={{ height: 260, padding: '20px' }}>
                    <Flex vertical gap='30px'>
                        <Flex vertical align='flex-start'>
                            <Typography.Title level={2} strong>
                                Create and sell product
                            </Typography.Title>
                            <Typography.Text type='secondary' strong>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur expedita repudiandae at porro repellendus quo
                                sunt distinctio inventore error est.
                            </Typography.Text>
                        </Flex>

                        <Flex gap='large'>
                            <Button type='primary' size='large'>
                                Explore More
                            </Button>
                            <Button>
                                Top Sellers
                            </Button>
                        </Flex>
                    </Flex>
                </Card>
            </div>
            <div className='hover:-translate-y-2 duration-300  my-7'>

                <Card style={{ height: 260, padding: '20px' }}>
                    <Flex vertical gap='30px'>
                        <Flex vertical align='flex-start'>
                            <Typography.Title level={2} strong>
                                Create and sell product
                            </Typography.Title>
                            <Typography.Text type='secondary' strong>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur expedita repudiandae at porro repellendus quo
                                sunt distinctio inventore error est.
                            </Typography.Text>
                        </Flex>


                    </Flex>
                </Card>
            </div>
        </div>

    );
};

export default Banner;