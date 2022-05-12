import styled from 'styled-components';
import T from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Profile from '../../assets/profile.jpg';

const TABLE_DATA = [
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'OPEN'
    },
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'CLOSED'
    },
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'PENDING'
    },
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'PENDING'
    },
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'CLOSED'
    },
    {
        id: 1143155,
        name: 'Иванов Семен',
        img: Profile,
        work: 'Программист',
        questionary: 'Фронт',
        email: 'dasda@mail.ru',
        date: '2022-05-10 09:47:59',
        status: 'OPEN'
    }
];

const TABLE_HEAD = [
    { name: 'ID' },
    { name: 'Имя' },
    { name: 'Должность' },
    { name: 'Почта' },
    { name: 'Анкета' },
    { name: 'Дата' },
    { name: 'Статус' }
];

function List() {
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {TABLE_HEAD.map((head) => (
                                <TableCell>{head.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TABLE_DATA.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>
                                    <CellWrapper>
                                        <Image src={data.img} alt="" />
                                        {data.name}
                                    </CellWrapper>
                                </TableCell>
                                <TableCell>{data.work}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.questionary}</TableCell>
                                <TableCell>{data.date}</TableCell>
                                <TableCell>
                                    <Status className={`Status ${data.status}`}>
                                        {data.status}
                                    </Status>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default List;

const Container = styled.header`
    width: calc(100% - 78px - 40px);
    z-index: 99;
    left: 78px;
    position: relative;
    box-shadow: 2px 4px 10px 1px rgb(201 201 201 / 47%);
    margin: 20px;
`;

const Table = styled(T)`
    background-color: ${({ theme }) => theme.colors.tertiary};
`;

const CellWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

const Status = styled.span`
    padding: 5px;
    border-radius: 5px;

    &.OPEN {
        color: green;
        background-color: rgba(0, 128, 0, 0.151);
    }
    &.PENDING {
        color: goldenrod;
        background-color: rgba(189, 189, 3, 0.103);
    }
    &.CLOSED {
        color: red;
        background-color: rgba(199, 81, 22, 0.103);
    }
`;
