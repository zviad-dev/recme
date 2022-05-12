import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import Profile from '../../assets/profile.jpg';

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <Search>
                    <SearchInput
                        placeholder="Поиск..."
                        autoComplete="off"
                        type="search"
                        name="search"
                    />
                    <FiSearch />
                </Search>
                <NavbarContent>
                    <NavbarItem>
                        <IconWrapper>
                            <IoMdNotificationsOutline />
                        </IconWrapper>
                        <Counter>1</Counter>
                    </NavbarItem>
                    <NavbarItem>
                        <UserWrapper>
                            <UserIconProfile src={Profile} />
                            <UserName>Семенов Антон</UserName>
                            <BsChevronDown />
                        </UserWrapper>
                    </NavbarItem>
                </NavbarContent>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;

const NavbarContainer = styled.header`
    height: 70px;
    width: calc(100% - 78px);
    z-index: 99;
    left: 78px;
    position: relative;
    background: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 2px 4px 10px 1px rgb(201 201 201 / 47%);
`;

const NavbarWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const Search = styled.form`
    display: flex;
    border: 0.5px solid lightgray;
    padding: 5px;
    background: #fff;
    border-radius: 6px;
    height: 30px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
`;

const NavbarContent = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;

    @media ${({ theme }) => theme.media.small} {
        display: none;
    }
`;

const IconWrapper = styled.div`
    font-size: 24px;
    display: flex;
`;

const Counter = styled.div`
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: -5px;
    cursor: pointer;
`;

const UserWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 20px;
    position: relative;
`;

const UserIconProfile = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserName = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.secondary};
    white-space: nowrap;
    margin-right: 10px;
`;
