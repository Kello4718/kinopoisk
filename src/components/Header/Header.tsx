import { AutoComplete, Col, Input, List, Row, Select, SelectProps } from 'antd';

import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getRandomInt = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const searchResult = () =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map(() => {
            return {
                value: 12312,
                label: (
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.title}>
                                <Link to={'/'}>
                                    <List.Item.Meta
                                        avatar={
                                            <img
                                                width="50"
                                                height="50"
                                                src="https://w.forfun.com/fetch/c3/c303eb11d7896a6e5990278bd3689192.jpeg"
                                            />
                                        }
                                        title={item.title}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </Link>
                            </List.Item>
                        )}
                    />
                ),
            };
        });

// const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
//     console.log(info?.source, value);

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const Header = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };
    return (
        <header className={styles.header}>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <AutoComplete
                        popupMatchSelectWidth={252}
                        style={{ width: 300 }}
                        options={options}
                        onSelect={onSelect}
                        onSearch={handleSearch}
                        size="large"
                    >
                        <Input.Search
                            size="large"
                            placeholder="input here"
                            enterButton
                        />
                    </AutoComplete>
                </Col>
                <Col span={8}>
                    <Select
                        className={styles.select}
                        onChange={handleChange}
                        placeholder="Год"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Col>
                <Col span={8}>
                    <Select
                        className={styles.select}
                        onChange={handleChange}
                        placeholder="Страна"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Col>
                <Col span={8}>
                    <Select
                        className={styles.select}
                        onChange={handleChange}
                        placeholder="Возрастной рейтинг"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </header>
    );
};

export default Header;
