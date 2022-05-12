import styled from 'styled-components';
import TodoForm from './TodoForm';

function CreateQuestionary() {
    return (
        <Container>
            <TodoForm />
        </Container>
    );
}

export default CreateQuestionary;

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
