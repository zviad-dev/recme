import styled from 'styled-components';
import { useState } from 'react';
import Navbar from '../components/application/Navbar';
import Sidebar from '../components/application/Sidebar';
import Table from '../components/application/Table';
import { Button, ButtonsKind } from '../components/common/Button';
import CreateQuestionary from '../components/application/CreateQuestionary';

function Questionary() {
<<<<<<< HEAD
    const [showForm, setShowForm] = useState(false);
=======
    const [showForm, setShowForm] = useState();
>>>>>>> 409aae8a13178cbda1ecf2b019bc49ea6ad7462e

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
<<<<<<< HEAD
                        onClick={() => setShowForm(true)}
=======
                        onClick={() => setShowForm(!showForm)}
>>>>>>> 409aae8a13178cbda1ecf2b019bc49ea6ad7462e
                        showForm={showForm}
                    >
                        Создать новую анкету
                    </Button>
                </Form>
            </Container>
<<<<<<< HEAD
            {showForm ? <CreateQuestionary /> : <Table />}
=======
            {showForm && <CreateQuestionary />}
            {!showForm && <Table />}
>>>>>>> 409aae8a13178cbda1ecf2b019bc49ea6ad7462e
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
