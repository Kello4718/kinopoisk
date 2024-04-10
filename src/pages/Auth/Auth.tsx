import { Button, Flex, Form, FormProps, Input, Result } from 'antd';
import { Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

import styles from './Auth.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateUserData } from '../../features/movies/moviesSlice';
import { useEffect } from 'react';

type FieldType = {
    login: string;
    password: string;
};

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.movies);
    const onFinish: FormProps<FieldType>['onFinish'] = (value) => {
        dispatch(updateUserData({ ...value, isAuth: true }));
    };
    useEffect(() => {
        if (user.isAuth) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [navigate, user.isAuth]);
    return (
        <Flex justify='center' align='center' className={styles.container}>
            {!user.isAuth ? (
                <Flex
                    justify="center"
                    align="center"
                    vertical
                    gap={'30px'}
                    className={styles.content}
                >
                    <Title>Давайте сначала авторизуемся! 😁</Title>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        labelAlign={'left'}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        autoComplete="off"
                        className={styles.form}
                        initialValues={{
                            login: 'Senior AVITO',
                            password: 'senior+pomidor',
                        }}
                    >
                        <Form.Item<FieldType>
                            label="Логин"
                            name="login"
                            rules={[
                                {
                                    required: true,
                                    message: 'Такого логина нет 😒',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Пароль"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пароль не подходит 😢',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Войти в систему
                            </Button>
                        </Form.Item>
                    </Form>
                </Flex>
            ) : (
                <Flex
                    justify="center"
                    align="center"
                    vertical
                    gap={'30px'}
                    className={styles.content}
                >
                    <Result
                        icon={<SmileOutlined />}
                        title="Прекрасно, вы вошли в систему. А теперь ждем 3 секунды 🙌"
                    />
                </Flex>
            )}
        </Flex>
    );
};

export default Auth;
