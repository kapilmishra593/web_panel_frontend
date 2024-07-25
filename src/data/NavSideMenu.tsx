import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUser, faGear, faHeadphones, faBarsProgress, faGauge } from "@fortawesome/free-solid-svg-icons";

export const navMenu: any = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icons: <FontAwesomeIcon icon={faGauge} />,
    },
    {
        name: "Posts",
        path: "/posts",
        icons: <FontAwesomeIcon icon={faBarsProgress} />,
    },
    {
        name: "Media",
        path: "/media",
        icons: <FontAwesomeIcon icon={faHeadphones} />,
    },
    {
        name: "Users",
        path: "/users",
        icons: <FontAwesomeIcon icon={faUser} />,
    },
    {
        name: "Approval",
        path: "/approval",
        icons: <FontAwesomeIcon icon={faThumbsUp} />,
    },
];