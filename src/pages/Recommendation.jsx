import styled from 'styled-components';
import { useState } from 'react';
import Navbar from '../components/application/Navbar';
import Sidebar from '../components/application/Sidebar';

function Recommendation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [hellow, setHellow] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleHellowChange = (event) => {
        setHellow(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert(`Вы ввели: \n 
        name: ${name} \n 
        email: ${email} \n 
        phone: ${phone} \n 
        hellow: ${hellow} \n 
            Сделано для тестов`);
    };
    return (
        <>
            <Sidebar />
            <Navbar />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form1>Создать рекомендацию</Form1>
                    <FormLabel htmlFor="for">Имя кандидата</FormLabel>
                    <FormInput
                        id="for"
                        type="text"
                        name="text"
                        placeholder="Введите Имя"
                        onChange={handleNameChange}
                        value={name}
                    />
                    <FormLabel htmlFor="for">Почта кандидата</FormLabel>
                    <FormInput
                        type="text"
                        name="text"
                        placeholder="Введите Имя"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <FormLabel htmlFor="for">Телефон</FormLabel>
                    <FormInput
                        type="text"
                        name="text"
                        placeholder="Введите Имя"
                        onChange={handlePhoneChange}
                        value={phone}
                    />
                    <FormLabel htmlFor="for">Приветствие</FormLabel>
                    <FormInput
                        type="text"
                        name="text"
                        placeholder="Введите Имя"
                        onChange={handleHellowChange}
                        // value={Hellow}
                    />
                    <FormLabel htmlFor="for">Список вопросов</FormLabel>
                    <Select>
                        <option value="volvo">Фронт</option>
                        <option value="volvo">Бекэнд</option>
                        <option value="volvo">Аналитик</option>
                    </Select>
                    <FormButton type="submit">Отправить</FormButton>
                </Form>
            </Container>
        </>
    );
}

export default Recommendation;

const Container = styled.header`
    width: calc(100% - 78px - 40px);
    padding: 30px;
    z-index: 99;
    left: 78px;
    position: relative;
    box-shadow: 2px 4px 10px 1px rgb(201 201 201 / 47%);
    margin: 20px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.tertiary};
`;

const Form = styled.form`
    background: ${({ theme }) => theme.colors.tertiary};
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    /* padding: 80px 32px; */
    border-radius: 4px;

    @media ${({ theme }) => theme.media.small} {
        padding: 32px 32px;
    }
`;

const Form1 = styled.h1`
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
`;

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 4px;
`;

const Select = styled.select`
    padding: 16px 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 4px;
`;

const FormButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 20px;
    cursor: pointer;
`;
