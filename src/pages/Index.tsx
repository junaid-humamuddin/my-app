import { MenuBar } from "../layout/MenuBar"
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <section className="langingBanner">
            <MenuBar />
            <Outlet />
        </section>
    )
}
export default Index;