import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material"
import { ReactNode } from "react"




const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const theme = createTheme({
        palette: {
            mode: "dark"
        },
        components: {
            MuiChip: {
                styleOverrides: {
                    root: {
                        margin: "5px"
                    }
                }
            }
        }
    })



    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )




}
export default ThemeProvider