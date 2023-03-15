import {Outlet} from "react-router-dom";
import SimplePageForm from "../../pages/SimplePageForm";

interface RoleRequiredRouterProps {
    role: boolean | undefined;
}

function RoleRequiredRouter({role}: RoleRequiredRouterProps) {
    return role ? <Outlet/> : <SimplePageForm title="401 Unauthorized"/>;
}

export default RoleRequiredRouter;
