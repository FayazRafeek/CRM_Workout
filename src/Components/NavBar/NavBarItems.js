import * as IoIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'


const NavBarItems = [
    {
        id: 1,
        title : 'Admission',
        icon : <IoIcons.IoMdSchool />,
        path: '/'
    },
    {
        id: 2,
        title : 'Fees',
        icon : <FaIcons.FaMoneyBillAlt />,
        path: '/Fees'
    },
    {
        id: 3,
        title : 'Academics',
        icon : <FaIcons.FaSchool />,
        path: '/Academics'
    }
]

export default NavBarItems