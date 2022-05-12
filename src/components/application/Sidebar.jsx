import { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import LogoCheckly from '../../assets/logo.svg';
import Show from '../../assets/menu.svg';
import Grid from '../../assets/grid.svg';
import Questionary from '../../assets/questionary.svg';
import Recommendation from '../../assets/recommendation.svg';
import Support from '../../assets/support.svg';
import Profile from '../../assets/profile.jpg';

const SIDEBAR_LINKS = [
    {
        name: '/home',
        trl: 'Главная',
        icon: Grid
    },
    { name: '/questionary', trl: 'Анкеты', icon: Questionary },
    { name: '/recommendation', trl: 'Рекомендации', icon: Recommendation }
];

function Sidebar() {
    const [show, setShow] = useState();

    return (
        <SidebarContainer show={show}>
            <LogoWrapper>
                <LogoIcon src={LogoCheckly} show={show} />
                <LogoText show={show}>Checkly</LogoText>
                <SidebarShowBtn
                    src={Show}
                    onClick={() => setShow(!show)}
                    show={show}
                />
            </LogoWrapper>
            <SidebarWrapper>
                {SIDEBAR_LINKS.map((link) => (
                    <SidebarItem>
                        <SidebarLink to={link.name}>
                            <SidebarLinkIconWrapper>
                                <SidebarLinkIcon src={link.icon} />
                            </SidebarLinkIconWrapper>
                            <SidebarLinkText show={show}>
                                {link.trl}
                            </SidebarLinkText>
                        </SidebarLink>
                    </SidebarItem>
                ))}
                <SupportWrapper
                    show={show}
                    onClick={() => {
                        window.location = 'mailto:smat11@mail.ru';
                    }}
                >
                    <SupportContent show={show}>
                        <SupportkIconProfile src={Profile} />
                        <SupportInfo show={show}>
                            <SupportText>Служба поддержки</SupportText>
                            <SupportText2>Всегда на связи</SupportText2>
                        </SupportInfo>
                    </SupportContent>
                    <SupportkIcon src={Support} show={show} />
                </SupportWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
    position: fixed;
    height: 100%;
    background: ${({ theme }) => theme.colors.quaternary};
    padding: 6px 14px;
    z-index: 100;
    transition: all 0.5s ease;
    box-shadow: 2px 4px 10px 1px rgb(201 201 201 / 47%);
    width: ${({ show }) => (show ? '250px' : '78px')};
`;

const LogoWrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
`;

const LogoIcon = styled.img`
    height: 40px;
    width: 40px;
    transition: all 0.5s ease;
    opacity: ${({ show }) => (show ? '100%' : '0')};
    margin-right: 1rem;
`;

const LogoText = styled.div`
    transition: all 0.5s ease;
    opacity: ${({ show }) => (show ? '100%' : '0')};
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.5rem;
    font-weight: 600;
`;

const SidebarShowBtn = styled.img`
    position: absolute;
    height: 24px;
    width: 24px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.4s ease;
    cursor: pointer;
    transition: all 0.5s ease;
    right: ${({ show }) => (show ? '0' : '0.8rem')};
`;

const SidebarWrapper = styled.ul`
    margin-top: 20px;
`;

const SidebarItem = styled.li`
    position: relative;
    margin: 8px 0;
    list-style: none;
`;

const SidebarLink = styled(LinkR)`
    display: flex;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`;

const SidebarLinkIconWrapper = styled.div`
    height: 50px;
    min-width: 50px;
    text-align: center;
    line-height: 63px;
    margin-right: 0.5rem;
`;

const SidebarLinkIcon = styled.img``;

const SidebarLinkText = styled.span`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1rem;
    transition: 0.4s;
    opacity: ${({ show }) => (show ? '100%' : '0')};
`;

const SupportWrapper = styled.a`
    margin: 8px 0;
    list-style: none;
    position: fixed;
    height: 60px;
    width: 78px;
    left: 0;
    bottom: -8px;
    padding: 7px 14px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.5s ease;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    width: ${({ show }) => (show ? '250px' : '78px')};
`;

const SupportContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: 0.4s;
    opacity: ${({ show }) => (show ? '100%' : '0')};
`;

const SupportkIconProfile = styled.img`
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
`;

const SupportInfo = styled.div``;

const SupportText = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.tertiary};
    white-space: nowrap;
`;

const SupportText2 = styled.p`
    color: ${({ theme }) => theme.colors.tertiary};
    white-space: nowrap;
    font-size: 12px;
`;

const SupportkIcon = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.5s ease;
    right: ${({ show }) => (show ? '0.8rem' : '1.8em')};
`;
