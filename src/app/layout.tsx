import GrommetWrapper from "@/components/wrappers/GrommetWrapper/GrommetWrapper"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        // <Grommet theme={grommetTheme} full themeMode={dark ? "dark" : "light"}>
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <GrommetWrapper>
                    {children}
                </GrommetWrapper>
            </body>
        </html>
    )
}