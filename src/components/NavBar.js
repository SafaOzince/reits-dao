import { Nav, Logo } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled"
import { NavbarButton } from "./styles/Button.styled"


const navigation = [
    { name: "Business Overview",
      href: "#projects" 
    },
    { name: "Estate Info",
      items: [
        {
          name: "Trend Royal 2",
          href: "#partners",
        },
        {
          name: "2nd Project",
          href: "#partners",
        },
        {
          name: "3rd Project",
          href: "#partners",
        },
      ],
    },
    { name: "Defi", 
      href: "#about" 
    },
    { name: "Partners",
      href: "#whatwedo" 
    },
    { name: "Notice",
      href: "#about" 
    },
  ];

export default function NavBar() {
  return (
    <Nav>
        <Logo src='./images/flogo.svg' alt='' />
        <Flex >
            {navigation.map((item) => (
              <ul>
                <li>
                  <a href={item.href}>{item.name}</a>
                </li>
              </ul>
            ))}
        </Flex>
        <NavbarButton>
            <a href="#contact"></a>
        </NavbarButton>
    </Nav>
  )
}