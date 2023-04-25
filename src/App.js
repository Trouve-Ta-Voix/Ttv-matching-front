import "./shared/reset.css";

import MainLayout from "./presentation/layouts/MainLayout/MainLayout";
import Logo from "./presentation/atoms/Logo/Logo";

function App() {
    return (
        <>
            <Logo position={"inline"} />
            <MainLayout>
                <p>
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSSSSSSSSS
                </p>
                <p>
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSSSSSSSS
                </p>
            </MainLayout>
        </>
    );
}

export default App;
