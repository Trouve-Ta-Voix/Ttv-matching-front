import "./shared/reset.css";

import MainLayout from "./presentation/layouts/MainLayout/MainLayout";
import Logo from "./presentation/atoms/Logo/Logo";
import Paragraph from "./presentation/atoms/Paragraph/Paragraph";
import Button from "./presentation/atoms/Button/Button";
import TextInput from "./presentation/molecules/TextInput/TextInput";

function App() {
    return (
        <>
            <Logo position={"inline"} />
            <MainLayout>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Paragraph>
                <Button
                    content="AHAAAH"
                    onClick={() => alert("Hello")}
                    color="orange"
                >
                    Click me
                </Button>
                <TextInput label={"Test"} onChange={() => console.log("a")} />
            </MainLayout>
        </>
    );
}

export default App;
