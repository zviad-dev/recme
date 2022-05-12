import styled from 'styled-components';
import { useState } from 'react';
import Navbar from '../components/application/Navbar';
import Sidebar from '../components/application/Sidebar';
import Table from '../components/application/Table';
import { Button, ButtonsKind } from '../components/common/Button';
import CreateQuestionary from '../components/application/CreateQuestionary';

function Questionary() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Sidebar />
            <Navbar />
            <Container>
                <Form>
                    <Select>
                        <option>Поиск анкеты</option>
                        <option>Java</option>
                        <option>Python </option>
                        <option>Аналитик</option>
                    </Select>
                    <Button
                        kind={ButtonsKind.tertiary}
                        to=""
                        onClick={() => setShowForm(true)}
                        showForm={showForm}
                    >
                        Создать новую анкету
                    </Button>
                </Form>
            </Container>
            {showForm ? <CreateQuestionary /> : <Table />}
        </>
    );
}

export default Questionary;

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
    display: flex;
`;

const Select = styled.select`
    display: flex;
    margin-right: 20px;
    width: 100%;
    display: flex;
    border: 0.5px solid lightgray;
    padding: 5px;
    background: #fff;
    border-radius: 6px;
    height: 50px;
`;
