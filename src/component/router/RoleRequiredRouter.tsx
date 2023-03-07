import {Outlet} from "react-router-dom";
import SimplePageForm from "../../page/SimplePageForm";

interface RoleRequiredRouterProps {
    role: string | null;
}

function RoleRequiredRouter({role}: RoleRequiredRouterProps) {
    return role ? <Outlet/> : <SimplePageForm title="401 Unauthorized"/>;
}

export default RoleRequiredRouter;
