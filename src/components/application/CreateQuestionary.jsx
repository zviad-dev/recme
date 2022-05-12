import styled from 'styled-components';
<<<<<<< HEAD
import TodoForm from './TodoForm';
=======
>>>>>>> 409aae8a13178cbda1ecf2b019bc49ea6ad7462e

function CreateQuestionary() {
    return (
        <Container>
<<<<<<< HEAD
            <TodoForm />
=======
            CreateQuestionaryvsdvs ssssssssssssssssssssssssssss
>>>>>>> 409aae8a13178cbda1ecf2b019bc49ea6ad7462e
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
