import React from 'react';
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink,  Wrapper } from './Navbar.elements';
import { FaDog } from "react-icons/fa";
import  CartWidget  from "./CartWidget";


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
                <CartWidget />
                
                
            </Menu>

        </Wrapper>
    </Container>

  )
};

export default Navbar;