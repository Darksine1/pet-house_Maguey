import React from 'react';
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from './Navbar.elements';
import { FaDog } from "react-icons/fa";


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LogoContainer>
                <FaDog />
                <p>PetHouse</p>
            </LogoContainer>

            <Menu>
                <MenuItem>
                    <MenuItemLink>
                        Acerca
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                        Catalogo
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                        Contacto
                    </MenuItemLink>
                </MenuItem>
            </Menu>

        </Wrapper>
    </Container>
  )
};

export default Navbar;