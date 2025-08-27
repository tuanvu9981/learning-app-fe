import { AppBar } from "@mui/material";

export default function QuizLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AppBar color="warning"></AppBar>
            {children}
        </div>
    );
}